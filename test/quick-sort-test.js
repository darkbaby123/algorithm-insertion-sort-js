const {
  quickSortV1,
  partitionV1,
  partitionV2,
  quickSortV2,
} = require('../lib/quick-sort')

describe('quick sort', () => {
  describe('partitionV1', () => {
    function test(opts) {
      (opts.focus ? it.only : it)(JSON.stringify(opts.array), () => {
        expect(partitionV1(opts.array, 0, opts.array.length - 1)).toEqual(opts.pivot)
        expect(opts.array).toEqual(opts.sorted)
      })
    }

    test({ array: [1, 2, 3], pivot: 2, sorted: [1, 2, 3] })
    test({ array: [1, 3, 2], pivot: 1, sorted: [1, 2, 3] })
    test({ array: [1, 4, 5, 2, 3], pivot: 2, sorted: [1, 2, 3, 4, 5] })
  })

  describe('quickSortV1', () => {
    function test(array, sortedArray, focus = false) {
      (focus ? it.only : it)(JSON.stringify(array), () => {
        quickSortV1(array, 0, array.length - 1)
        expect(array).toEqual(sortedArray)
      })
    }

    test([], [])
    test([2, 1], [1, 2])
    test([1, 2, 3], [1, 2, 3])
    test([1, 3, 2], [1, 2, 3])
    test([1, 5, 4, 2, 3], [1, 2, 3, 4, 5])
    test([3, 7, 8, 5, 2, 1, 9, 5, 4], [1, 2, 3, 4, 5, 5, 7, 8, 9])
  })

  describe('partitionV2', () => {
    function test(opts) {
      (opts.focus ? it.only : it)(JSON.stringify(opts.array), () => {
        expect(partitionV2(opts.array, 0, opts.array.length - 1)).toEqual(opts.pivot)
        expect(opts.array).toEqual(opts.sorted)
      })
    }

    test({ array: [], pivot: 0, sorted: [] })
    test({ array: [1], pivot: 0, sorted: [1] })
    test({ array: [1, 2], pivot: 0, sorted: [1, 2] })
    test({ array: [2, 1], pivot: 1, sorted: [1, 2] })
    test({ array: [2, 1, 3], pivot: 1, sorted: [1, 2, 3] })
    test({ array: [4, 1, 5, 6, 3, 2], pivot: 3, sorted: [3, 1, 2, 4, 6, 5] })
  })

  describe('quickSortV2', () => {
    function test(array, sortedArray, focus = false) {
      (focus ? it.only : it)(JSON.stringify(array), () => {
        quickSortV2(array, 0, array.length - 1)
        expect(array).toEqual(sortedArray)
      })
    }

    test([], [])
    test([2, 1], [1, 2])
    test([1, 2, 3], [1, 2, 3])
    test([1, 3, 2], [1, 2, 3])
    test([1, 5, 4, 2, 3], [1, 2, 3, 4, 5])
    test([3, 7, 8, 5, 2, 1, 9, 5, 4], [1, 2, 3, 4, 5, 5, 7, 8, 9])
  })
})
