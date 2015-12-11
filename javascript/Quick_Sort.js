function quicksort(arr)
{
  //if array is empty
  if (arr.length === 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  //go through each element in array
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
         left.push(arr[i]);
      } else {
         right.push(arr[i]);
      }
  }
  console.log(left);
  console.log(right);
  return [].concat(quicksort(left), pivot, quicksort(right));
}

console.log(quicksort([123,34,12,45,23,556,12,4]));