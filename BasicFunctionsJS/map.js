// Iterate over arrays with map
// The map method will iterate through every element of the array, creating a new array with values that have been modified by the callback function, and return it. 
var oldArray = [1,2,3,4,5];

  var newArray = oldArray.map(function(val){
    return val + 3;
  });

  console.log(newArray); // [4,5,6,7,8]