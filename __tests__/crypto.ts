import bint from 'bint8array';
import { createKey, encrypt, decrypt } from '../src/lib/crypto';

const opts = {
  memlimit: 16777216, // crypto_pwhash_MEMLIMIT_MIN
  opslimit: 2, // crypto_pwhash_OPSLIMIT_MIN
};

const padding = 1024;

describe('crypto lib functions', () => {
  it('creates key, encrypts and decrypts', async () => {
    //Create key
    const key = await createKey(bint.fromString('testuser'), bint.fromString('testpass'), opts);
    const hexKey = bint.toString(key, 'hex');
    expect(hexKey).toBe('b6ab7b4d2c68ea472dfa6c810ecd1502bf4d77bf68d10af61d6402bc1a55ade7');

    //Encrypt blob with key
    const stringToEncrypt = 'encrypt me!';
    const encryptedBytes = encrypt(bint.fromString(stringToEncrypt), key, padding);
    expect(encryptedBytes.length).toBe(1064);

    //Decrypt with key
    const decryptedBytes = decrypt(encryptedBytes, key, padding);
    const decryptedString = bint.toString(decryptedBytes);
    expect(decryptedString).toBe(stringToEncrypt);
  });
});
