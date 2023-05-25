//countUniqueValues

function countUniqueValues(array) {
  if (array.length < 1) {
    return 0;
  }

  for (i = 0; i < array.length; i++) {
    let j = i + 1;
    if (j === array.length) {
      return;
    }
    if (array[i] === array[j]) {
      j++;
    } else {
      i++;
      array[i] = array[j];
      j++;
    }
  }
}

//solution

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    return i + 1;
  }
}
