// Condense arrays with reduce - The array method reduce is used to iterate through an array and condense it into one value.
// To use reduce you pass in a callback whose arguments are an accumulator (in this case, previousVal) and the current value (currentVal).

var array = [4,5,6,7,8];
var singleVal = 0;

  // Only change code below this line.

  singleVal = array.reduce(function(previousVal, currentVal) {
    return previousVal + currentVal;
  }, 0);

console.log(singleVal);
