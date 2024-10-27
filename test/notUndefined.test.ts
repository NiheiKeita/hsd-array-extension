describe('Array.prototype.notUndefined', () => {
  it('should remove all undefined values from an array', () => {
    const array = [1, undefined, 2, undefined, 3];
    const result = array.notUndefined();
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return an empty array if all elements are undefined', () => {
    const array = [undefined, undefined];
    const result = array.notUndefined();
    expect(result).toEqual([]);
  });

  it('should return the same array if there are no undefined values', () => {
    const array = [1, 2, 3];
    const result = array.notUndefined();
    expect(result).toEqual([1, 2, 3]);
  });

  it('should work with mixed types in the array', () => {
    const array = [1, 'a', undefined, true, undefined, { key: 'value' }];
    const result = array.notUndefined();
    expect(result).toEqual([1, 'a', true, { key: 'value' }]);
  });

  it('should not modify the original array', () => {
    const array = [1, undefined, 2];
    const originalArray = [...array];
    array.notUndefined();
    expect(array).toEqual(originalArray);
  });
});