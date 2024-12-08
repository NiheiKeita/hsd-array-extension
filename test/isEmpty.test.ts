describe('Array.prototype.isEmpty', () => {
  it('空配列の場合にtrueが返ってくるテスト', () => {
    const array: any[] = []
    expect(array.isEmpty()).toBe(true)
  })

  it('すべてundefinedの配列の場合にtrueが返ってくるテスト', () => {
    const array = [undefined, undefined]
    const result = array.isEmpty()
    expect(array.isEmpty()).toBe(true)
  })

  it('すべてundefinedではない配列の場合にfalseが返ってくるテスト', () => {
    const array = [1, 2, 3]
    expect(array.isEmpty()).toBe(false)
  })

  it('一部がundefinedではない配列の場合にtrueが返ってくるテスト', () => {
    const array = [1, undefined, 2]
    expect(array.isEmpty()).toBe(false)
  })
})