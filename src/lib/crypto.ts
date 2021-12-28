import secretBlob from 'secret-blob';
import bint from 'bint8array';
import sodium from 'sodium-native';

/**
 * Creates a key
 * @param username
 * @param password
 * @param opts
 * @returns {Promise<string>} generated key as a hex string
 */
export const createKeyHex = async (username: string, password: string, opts: any): Promise<string> => {
  const user = bint.fromString(username);
  const pass = bint.fromString(username);

  const opslimit = opts.opslimit ?? sodium.crypto_pwhash_OPSLIMIT_SENSITIVE;
  const memlimit = opts.memlimit ?? sodium.crypto_pwhash_MEMLIMIT_SENSITIVE;
  const alg = opts.alg ?? sodium.crypto_pwhash_ALG_DEFAULT;

  const salt = new Uint8Array(sodium.crypto_pwhash_SALTBYTES);
  sodium.crypto_generichash(salt, user, bint.fromString('backpack_salt_001'));

  const key = sodium.sodium_malloc(32);

  let params = [key, pass, salt, opslimit, memlimit, alg];
  if (!(typeof navigator != 'undefined' && navigator.product == 'ReactNative')) {
    //In react native an extra param is required for now
    params.push(() => {});
  }

  await sodium.crypto_pwhash_async(...params);

  //Without this sleep an empty byte array will be returned ¯\_(ツ)_/¯
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return bint.toString(key, 'hex');
};
