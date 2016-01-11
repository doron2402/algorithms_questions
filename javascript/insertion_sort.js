/*
 *  Insertion Sort
 *  for ex` [5,2,4,6,1,3]
 *
 *  j=1, i=0, key=2 ->swap 2,5 [2,5,4,6,1,3]
 *  j=2, i=1, key=4 -> swap 4,5 [2,4,5,6,1,3]
 *  j=3, i=2, key=6 -> nothing [2,4,5,6,1,3]
 *  j=4, i=3, key=1 -> swap 1,6, 1,5 1,4 1,2 [1,2,4,5,6,3]
 *  ...
 */
var insertionSort = function(arr){
  var key, i, j;
  for(j=1; j<arr.length; j++){
    key = arr[j];
    i = j-1;
    while(i>-1 && arr[i] > key){
      console.log('swapping: ' + arr[i] + ' with ' + arr[i+1]);
      arr[i+1] = arr[i];
      i--;
      arr[i+1] = key;
    }
  }
  return arr;
}

var result = insertionSort([5,2,4,6,1,3]);
console.log(result);
