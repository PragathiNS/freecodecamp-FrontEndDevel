var array = [1, 12, 21, 2];

// sort
array.sort(function(a,b){
    return a - b;
});
console.log("Sorted: " + array);

// reverse
var reverseArray = array.reverse();
console.log("Reversed: " + reverseArray);

// concat
var concatMe = [4,5,6];
var concatArray = array.concat(concatMe);
console.log("Concatenated: " + concatArray);