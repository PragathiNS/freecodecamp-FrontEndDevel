// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    var arr2D = [];
    var slicedArr;
    for (var i = 0; i < arr.length; i += size) {
        slicedArr = arr.slice(i, i + size);
        arr2D.push(slicedArr);
    }
    return arr2D;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));