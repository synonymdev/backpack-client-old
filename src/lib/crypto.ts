import secretBlob from 'secret-blob';
import bint from 'bint8array';
import sodium from 'sodium-native';
import { isReactNative } from './helpers';

export interface HashingOptions {
  memlimit?: number;
  opslimit?: number;
  alg?: string;
}

/**
 * Creates a key
 * @param username
 * @param password
 * @param opts
 * @returns {Promise<string>} generated key as a hex string
 */
export const createKey = async (
  username: Uint8Array,
  password: Uint8Array,
  opts: HashingOptions,
): Promise<Uint8Array> => {
  const opslimit = opts.opslimit ?? sodium.crypto_pwhash_OPSLIMIT_SENSITIVE;
  const memlimit = opts.memlimit ?? sodium.crypto_pwhash_MEMLIMIT_SENSITIVE;
  const alg = opts.alg ?? sodium.crypto_pwhash_ALG_DEFAULT;

  const salt = new Uint8Array(sodium.crypto_pwhash_SALTBYTES);
  sodium.crypto_generichash(salt, username, bint.fromString('backpack_salt_001'));

  const key = sodium.sodium_malloc(32);

  const params = [key, password, salt, opslimit, memlimit, alg];
  if (!isReactNative()) {
    // If not react native an extra param is required for now
    params.push(() => {});
  }

  await sodium.crypto_pwhash_async(...params);

  // Without this sleep an empty byte array will be returned ¯\_(ツ)_/¯
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return key;
};

/**
 * Pads and encrypts a plain text blob with given key
 * @param plaintext
 * @param key
 * @param pad
 * @returns {Promise<any>}
 */
export const encrypt = (plaintext: Uint8Array, key: Uint8Array, pad: number) => {
  const padBuf = sodium.sodium_malloc(plaintext.byteLength + pad);
  padBuf.set(plaintext);
  const paddedLength = sodium.sodium_pad(padBuf, plaintext.byteLength, pad);
  const padded = padBuf.subarray(0, paddedLength);

  const encrypted = secretBlob.encrypt(padded, key);
  sodium.sodium_free(padBuf);
  return encrypted;
};

/**
 * Decrypts with key and removes padding
 * @param encrypted
 * @param key
 * @param pad
 * @returns {any}
 */
export const decrypt = (encrypted: Uint8Array, key: Uint8Array, pad: number): Uint8Array => {
  const plaintext = secretBlob.decrypt(encrypted, key);
  const unpaddedLength = sodium.sodium_unpad(plaintext, plaintext.byteLength, pad);

  return plaintext.subarray(0, unpaddedLength);
};
