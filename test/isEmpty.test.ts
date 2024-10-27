describe('Array.prototype.isEmpty', () => {
  it('should return true for an empty array', () => {
    const array: any[] = [];
    expect(array.isEmpty()).toBe(true);
  });

  it('should return true for an array with only undefined elements', () => {
    const array = [undefined, undefined];
    const result = array.isEmpty()
    expect(array.isEmpty()).toBe(true);
  });

  it('should return false for an array with non-undefined elements', () => {
    const array = [1, undefined, 2];
    expect(array.isEmpty()).toBe(false);
  });

  it('should return false for an array with non-undefined elements only', () => {
    const array = [1, 2, 3];
    expect(array.isEmpty()).toBe(false);
  });
});