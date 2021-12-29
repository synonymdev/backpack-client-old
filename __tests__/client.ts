import bint from 'bint8array';
import Client from '../src';

const opts = {
  memlimit: 16777216, // crypto_pwhash_MEMLIMIT_MIN
  opslimit: 2, // crypto_pwhash_OPSLIMIT_MIN
};

const username = 'testuser';
const password = 'testpass';
const padding = 1024;

jest.setTimeout(15000);

describe('client integration', () => {
  it('instantiate a client, encrypt, store, retrieve and decrypt a backup', async () => {
    const server = { id: process.env.SERVER_ID, url: process.env.SERVER_URL };

    expect(server.id).toBeDefined();
    expect(server.url).toBeDefined();

    const client = new Client({ username, password }, server, opts, padding);

    //Needs to fail if a key has not been set/created
    await expect(client.register()).rejects.toThrow();

    const cachedKeyHex = await client.createKey();

    //Registration works after key is created
    await expect(client.register()).resolves.not.toThrow();

    //Store backup
    const uniqueBackupStr = `Back me up ${new Date().toString()}`;
    const backup = bint.fromString(uniqueBackupStr);
    await expect(client.store(backup)).resolves.not.toThrow();

    //Retrieve backup
    const retrievedBackup = await client.retrieve();
    expect(bint.toString(retrievedBackup)).toBe(uniqueBackupStr);

    //Recreate client with cached encryption key and retrieve stored backup
    const client2 = new Client({ username, password, keyHex: cachedKeyHex }, server, opts, padding);
    const retrievedBackup2 = await client2.retrieve();
    expect(bint.toString(retrievedBackup2)).toBe(uniqueBackupStr);
  });
});
