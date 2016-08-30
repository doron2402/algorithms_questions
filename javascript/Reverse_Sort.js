/*
	Sort Reverse using recursion
*/

var n = [1,2,3,4];

function revSort(array, index) {

  if (index === array.length-1) {
    return array;
  }

  if (array[index+1] && array[index] < array[index+1]) {
    swap(array, index);
  } 
  if (array[index-1] && array[index-1] < array[index]) {
    swap(array, --index);
    return revSort(array, --index);
  }
  return revSort(array, ++index);

}

var swap = function(arr, index) {
  var tmp = arr[index];
  arr[index] = arr[index+1];
  arr[index+1] = tmp;
};

console.log(revSort(n,0));