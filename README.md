# backpack-client

Client side library for creating and retrieving remote backpack backups.

## ⚠️ Warning

This is pre-alpha software. Please use at your own risk. Expect breaking changes

## Install

```
yarn add @synonymdev/backpack-client
```

## Usage

```javascript
import bint from 'bint8array';
import Client from '@synonymdev/backpack-client';
```

```javascript
const username = 'testuser';
const password = 'testpass';
const server = { id: 'test123', url: 'wss://my-backup-server.com' };
const opts = {
  memlimit: 16777216, // crypto_pwhash_MEMLIMIT_MIN
  opslimit: 2, // crypto_pwhash_OPSLIMIT_MIN
};
const padding = 1024;

const client = new Client({ username, password }, server, opts, padding);

// Setup
try {
  // Encryption key derived from the username and password.
  // Hashing can take some time depending on environment and opts.
  // Hex version of encryption key can be stored in device keychain and passed when creating the client next time so it doesn't need to be dervied on each use.
  const keyHexToCache = await client.createKey();

  // Server registration required on first use
  await client.register();
} catch (e) {
  console.error(e);
}

// Storing
try {
  const uniqueBackupStr = 'Back me up';
  const backupBytes = bint.fromString(uniqueBackupStr); //Accepts Uint8Array
  await client.store(backupBytes);
} catch (e) {
  console.error(e);
}

// Retrieving
try {
  const retrievedBackup = await client.retrieve();
  const backup = bint.toString(retrievedBackup);
} catch (e) {
  console.error(e);
}
```

## Development
```
git clone https://github.com/synonymdev/backpack-client.git
cd backpack-client
yarn
yarn build
```

### Tests

```
yarn test:unit
```

### Integration test

```
SERVER_ID=test123 SERVER_URL=wss://my-backup-server.com yarn test:integration
```

### Code formatting

```
yarn format
```
