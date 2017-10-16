//concat takes an array as an argument and returns a new array with the elements of this array concatenated onto the end.

var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];

newArray = oldArray.concat(concatMe);
console.log(newArray);