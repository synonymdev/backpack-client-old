import WSStream from 'webnet/websocket';
import Spake from 'spake2-ee';
import SpakeChannel from 'handshake-peer/spake';
import bint from 'bint8array';
import { encrypt, decrypt, createKey, HashingOptions } from './lib/crypto';
import { frame } from './lib/helpers';
import Bitkit from './schemas/bitkit';

const { RegisterMessage, ConnectMessage, RPC } = require('./lib/wire');

interface ServerInfo {
  id: string | Uint8Array;
  url: string;
}

interface Auth {
  username: string;
  password: string;
  keyHex?: string;
}

type TConnect = (info: ServerInfo, cb: Function) => void;

/**
 * Default server connection
 * @param info
 * @param cb
 */
const defaultConnect = (info: ServerInfo, cb: Function) => {
  const socket = new WebSocket(info.url);
  // @ts-ignore
  socket.onerror = (socketErr: Error): void => cb(socketErr);

  // socket must have stream api
  const ws = new WSStream(socket, {
    onconnect: (): void => cb(null, ws),
  });
};

const missingKeyError = 'Encryption key required. Call createKey or setKey first.';

class Client {
  private readonly serverInfo: ServerInfo;
  private readonly username: Uint8Array;
  private readonly password: Uint8Array;
  private key: Uint8Array | undefined;
  private readonly opts: HashingOptions;
  private readonly connect: TConnect;
  private readonly padding: number;

  constructor(
    auth: Auth,
    server: ServerInfo,
    opts: HashingOptions,
    padding: number,
    connect: TConnect = defaultConnect,
  ) {
    if (typeof server.id === 'string') {
      server.id = bint.fromString(server.id);
    }

    const { username, password, keyHex } = auth;

    this.username = bint.fromString(username);
    this.password = bint.fromString(password);
    this.key = keyHex ? bint.fromString(auth.keyHex, 'hex') : undefined;
    this.serverInfo = server;
    this.opts = opts;
    this.connect = connect;
    this.padding = padding;
  }

  /**
   * Accepts a hex formatted key for encryption/decryption
   * @param keyHex
   * @param opts
   */
  setKey(keyHex: string, opts: HashingOptions): void {
    this.key = bint.fromString(keyHex, 'hex');
  }

  /**
   * Creates, sets and returns an encryption key using username and password.
   * Encryption key can be saved in application's keychain so password hashing isn't required each time.
   * @param username
   * @param password
   * @param opts
   * @returns {Promise<string>} Encryption key in hex format.
   */
  async createKey(): Promise<string> {
    this.key = await createKey(this.username, this.password, this.opts);
    return bint.toString(this.key, 'hex');
  }

  /**
   * Registers user on backpack server
   * @returns {Promise<unknown>}
   */
  async register(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connect(this.serverInfo, (err: Error, transport: any) => {
        if (err) return reject(err);

        const data = Spake.ClientSide.register(this.password);
        const request = new RegisterMessage(this.username, data);

        transport.write(frame(request.encode()));
        resolve();
      });
    });
  }

  /**
   * Creates channel
   * @returns {Promise<unknown>}
   */
  private async channel(): Promise<{ write: Function; end: Function; on: Function }> {
    return new Promise((resolve, reject) => {
      this.connect(this.serverInfo, (err: Error, transport: any) => {
        if (err) return reject(err);

        const request = new ConnectMessage(this.username);
        transport.write(frame(request.encode()));

        // spake module handles handshake
        const channel = new SpakeChannel.Client(
          { username: this.username, password: this.password },
          this.serverInfo,
          transport,
        );
        resolve(channel);
      });
    });
  }

  /**
   * Encrypts and stores a backup
   * @param data
   * @returns {Promise<void>}
   */
  async store(data: Uint8Array): Promise<void> {
    if (!this.key) {
      throw new Error(missingKeyError);
    }

    const chan = await this.channel();
    chan.write(RPC.StoreMessage);
    chan.end(encrypt(data, this.key, this.padding));
  }

  /**
   * Retrieves and decrypts backup
   * @returns {Promise<Uint8Array>}
   */
  async retrieve(): Promise<Uint8Array> {
    if (!this.key) {
      throw new Error(missingKeyError);
    }
    const chan = await this.channel();

    const chunks: number[] = [];
    chan.on('data', (data: number) => chunks.push(data));

    chan.write(RPC.RetrieveMessage);

    await new Promise((resolve, reject) => {
      chan.on('end', resolve);
      chan.on('error', reject);
    });

    return decrypt(bint.concat(chunks), this.key, this.padding);
  }
}

export default Client;
export { Bitkit };
