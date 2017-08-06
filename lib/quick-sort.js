function quickSortV1(array, left, right) {
  if (left < right) {
    const pivot = partitionV1(array, left, right)
    quickSortV1(array, left, pivot - 1)
    quickSortV1(array, pivot + 1, right)
  }
}

function partitionV1(array, left, right) {
  const pivot = array[right]
  let pivotIdx = left

  for (let i = left; i < right; i++) {
    if (array[i] < pivot) {
      swap(array, i, pivotIdx)
      pivotIdx += 1
    }
  }
  swap(array, pivotIdx, right)
  return pivotIdx
}

function quickSortV2(array, left, right) {
  if (left < right) {
    const pivot = partitionV2(array, left, right)
    quickSortV2(array, left, pivot - 1)
    quickSortV2(array, pivot + 1, right)
  }
}

function partitionV2(array, left, right) {
  if (right - left < 1) return left

  const pivot = left
  let i = left + 1
  let j = right

  while (true) {
    while (i <= right && array[pivot] >= array[i]) i++
    while (j >= left + 1 && array[pivot] < array[j]) j--

    if (i >= j) break
    swap(array, i, j)
  }

  swap(array, pivot, j)
  return j
}

function swap(array, idx1, idx2) {
  const t = array[idx1]
  array[idx1] = array[idx2]
  array[idx2] = t
}

module.exports = {
  quickSortV1,
  partitionV1,
  partitionV2,
  quickSortV2,
}
