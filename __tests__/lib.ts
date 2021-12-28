import { createKeyHex } from '../src/lib/crypto';

const opts = {
  memlimit: 16777216, // crypto_pwhash_MEMLIMIT_MIN
  opslimit: 2, // crypto_pwhash_OPSLIMIT_MIN
};

describe('crypto lib functions', () => {
  beforeAll(async () => {});

  it('creates valid key', async () => {
    const key = await createKeyHex('user', 'pass', opts);
    expect(key).toBe('2ed9af529fc521448b7db4bfb6017336f771b70cfbd8e73e3f4543736d082d87');
  });
});
