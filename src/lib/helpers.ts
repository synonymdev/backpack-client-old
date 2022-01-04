export const frame = (buf: Uint8Array) => {
  const ret = new Uint8Array(2 + buf.length);
  const view = new DataView(ret.buffer, ret.byteOffset);
  view.setUint16(0, buf.length, true);
  ret.set(buf, 2);

  return ret;
};
