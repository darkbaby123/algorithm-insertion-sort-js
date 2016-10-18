function insertionSort(origArray) {
  const array = origArray.slice()

  for (let i = 1; i < array.length; i++) {
    const t = array[i]
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > t) {
        array[j+1] = array[j]
        array[j] = t
        break
      }
    }
  }

  return array
}

module.exports = insertionSort
