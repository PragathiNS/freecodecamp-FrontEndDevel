//method sort to easily sort the values in an array alphabetically or numerically. 

var array = [1, 12, 21, 2];

// sorts in place
//sort can be passed a compare function as a callback. The compare function should return a negative number if a should be before b, a positive number if a should be after b, or 0 if they are equal.

array.sort(function(a,b){
    return a - b;
});

console.log(array);
