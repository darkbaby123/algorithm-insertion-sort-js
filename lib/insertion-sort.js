function insertionSort(origArray) {
  const array = origArray.slice()

  for (let i = 1; i < array.length; i++) {
    const t = array[i]
    let j = i - 1

    while (j >= 0 && array[j] > t) {
      array[j+1] = array[j]
      j--
    }
    array[j+1] = t
  }

  return array
}

module.exports = insertionSort
