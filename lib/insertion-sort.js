function insertionSort(origArray) {
  const array = origArray.slice()

  for (let i = 1; i < array.length; i++) {
    const t = array[i]
    let j
    for (j = i - 1; j >= 0 && array[j] > t; j--) array[j+1] = array[j]
    array[j+1] = t
  }

  return array
}

module.exports = insertionSort
