/*
  ** Find duplicate number in array **
  Given an array 'A' of 'N+1' integers, all of which lie between
  '0' and 'N-1', return any of the duplicate element in O(N) time
  using O(1) space. Assume 'A' is read-only.

  - Time Complexity: O(n)
	- Auxiliary Space: O(1)
*/
var findDuplicates = function(arr)
{
  var i = 0;

  for (i = 0; i < arr.length-1; i++) {
    while (arr[arr[i]] != arr[i]) {
      var tmp = arr[i];
      arr[i] = arr[tmp];
      arr[tmp] = tmp;
    }
  }

  for (i = 0; i < arr.length-1; i++) {
    if (arr[i] != i) {
      console.log("Number: " + arr[i]);
    }
  }

}

var run = function() {
  var arr = [1,2,3,1,3,0,6];
  findDuplicates(arr);

}
run();

