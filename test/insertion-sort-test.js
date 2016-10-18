const insertionSort = require('../lib/insertion-sort')

describe('insertionSort', () => {
  it('[]', () => {
    expect(
      insertionSort([])
    ).toEqual([])
  })

  it('[1]', () => {
    expect(
      insertionSort([1])
    ).toEqual([1])
  })

  it('[1, 2]', () => {
    expect(
      insertionSort([1, 2])
    ).toEqual([1, 2])
  })

  it('[5, 4, 3, 2, 1]', () => {
    expect(
      insertionSort([5, 4, 3, 2, 1])
    ).toEqual([1, 2, 3, 4, 5])
  })

  it('[6, 5, 3, 1, 8, 7, 2, 4]', () => {
    expect(
      insertionSort([6, 5, 3, 1, 8, 7, 2, 4])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
})
