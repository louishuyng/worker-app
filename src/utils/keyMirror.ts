export const keyMirror = (keys: any) => {
  const keyList = Array.isArray(keys) ? keys : Object.keys(keys);
  const mirror: any = {};
  keyList.forEach((v) => {
    mirror[v] = v;
    return null;
  });
  return mirror;
};
