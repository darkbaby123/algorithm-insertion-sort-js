const insertionSort = require('../lib/insertion-sort')

describe('insertionSort', () => {
  it('[6, 5, 3, 1, 8, 7, 2, 4]', () => {
    expect(
      insertionSort([6, 5, 3, 1, 8, 7, 2, 4])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
})
