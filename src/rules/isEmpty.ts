declare global {
  interface Array<T> {
    isEmpty(): boolean;
  }
}

Array.prototype.isEmpty = function (): boolean {
  return this.every(item => item === undefined) || this.length === 0;
}

export { }