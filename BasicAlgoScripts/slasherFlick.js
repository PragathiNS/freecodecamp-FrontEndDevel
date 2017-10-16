// Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
    var head = 0;
    var retArr = arr.splice(head, howMany); // slices off the n numbers from the head
    return arr; // array without elements of retArr
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3], 0));
console.log(slasher(["burgers", "fries", "shake"], 1));