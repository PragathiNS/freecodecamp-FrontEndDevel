//The filter method is used to iterate through an array and filter out elements where a given condition is not true.

var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray.filter(function(val){
  return val < 6;
});

console.log(newArray);