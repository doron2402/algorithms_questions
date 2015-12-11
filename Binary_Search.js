/*
  binarySearch: find a key in a sorted array
*/
var binarySearch = function(arr, key) {
  var min = 0;
  var max = arr.length-1;
  var mid = 0;
  while (min <= max) {
    mid = min + Math.floor((max-min)/2);

    if (key < arr[mid]) {
      max = mid - 1;
    }
    else if (key > arr[mid]) {
      min = mid + 1;
    }
    else {
      return mid;
    }
  }
  return -1;
};


//Example:
var tempArray = [1, 13, 19, 23, 45, 67, 89, 123, 568]
binarySearch(tempArray, 19); //return 2
//Steps
// min=0;max=8;mid=4;
// key (19) < arr[4] (45)
// max=3;mid=1;
// key (19) > arr[1] (13)
// min=2;
// mid=2;
// else return mid