declare global {
  interface Array<T> {
    notUndefined(): Exclude<T, undefined>[];
  }
}

Array.prototype.notUndefined = function <T>(): Exclude<T, undefined>[] {
  return this.filter((item): item is Exclude<T, undefined> => item !== undefined);
};

export { };