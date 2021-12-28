import bint from 'bint8array';
import { createKey, encrypt, decrypt } from '../src/lib/crypto';

const opts = {
  memlimit: 16777216, // crypto_pwhash_MEMLIMIT_MIN
  opslimit: 2, // crypto_pwhash_OPSLIMIT_MIN
};

describe('crypto lib functions', () => {
  beforeAll(async () => {});

  it('creates key, encrypts and decrypts', async () => {
    //Create key
    const key = await createKey('user', 'pass', opts);
    const hexKey = bint.toString(key, 'hex');
    expect(hexKey).toBe('2ed9af529fc521448b7db4bfb6017336f771b70cfbd8e73e3f4543736d082d87');

    //Encrypt string blob with key
    const stringToEncrypt = 'encrypt me!';
    const encryptedBytes = encrypt(bint.fromString(stringToEncrypt), key);
    expect(encryptedBytes.length).toBe(131112);

    //Decrypt with key
    const decryptedBytes = decrypt(encryptedBytes, key);
    const decryptedString = bint.toString(decryptedBytes);
    expect(decryptedString).toBe(stringToEncrypt);
  });
});
