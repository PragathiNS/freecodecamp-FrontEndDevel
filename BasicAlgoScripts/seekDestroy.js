// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    // var args = Array.prototype.slice.call(arguments);
    // arr = arguments[0];
    // console.log(arguments); { '0': [ 1, 2, 3, 1, 2, 3 ], '1': 2, '2': 3 }
    // console.log(arguments[0]);
    for (var i = 1; i < arguments.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] === arguments[i]) {
                delete arr[j]; // deletes and returns a null object
            }
        }
    }
    // console.log(arr); // [ 1, , , 1, ,  ]
    return arr.filter(Boolean); // removes the null object // [1, 1]
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));