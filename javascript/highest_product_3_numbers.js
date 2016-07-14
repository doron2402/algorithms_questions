/*
  highest_product_of_3([-200,-200,12,12,44,345,123,1]);

  -200 * -200 * 345 = 13800000
*/
function highest_product_of_3(arr){
  if (arr.length < 3){
    throw new Error("Less than 3 items!");
  }

  var highest = Math.max(arr[0], arr[1]);
  var lowest = Math.min(arr[0], arr[1]);

  var highest_product_of_two = arr[0] * arr[1];
  var lowest_product_of_two = arr[0] * arr[1];
  var highest_product_of_three = arr[0] * arr[1] * arr[2];

  arr.forEach(function(current) {

    highest_product_of_three = Math.max(highest_product_of_three, current * highest_product_of_two, current * lowest_product_of_two);
    highest_product_of_two = Math.max(highest_product_of_two, current * highest, current * lowest);
    lowest_product_of_two = Math.min(lowest_product_of_two, current * highest, current * lowest);

    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  });

  return highest_product_of_three;
}


/*
  Another way using SORT

    arr.sort();
    return arr.pop() * Math.Max(arr[0]*arra[1], arr[arr.length-1] * arr[arr.length-2]);

*/
