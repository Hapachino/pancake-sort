function pancakeSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let smallest = Infinity;
    let smallestIndex = null;

    for (let j = i; j < length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        smallestIndex = j;
      }
    }

    array = [...array.slice(0, smallestIndex), ...array.slice(smallestIndex).reverse()]
    array = [...array.slice(0, i), ...array.slice(i).reverse()];
  }

  return array;
}

const test = [5, 3, 4, 1, 2];

const result = pancakeSort(test);

console.log(result);

this.setState({
  list: this.state.list.filter(item => {
    return item.key !== key;
  })
});
