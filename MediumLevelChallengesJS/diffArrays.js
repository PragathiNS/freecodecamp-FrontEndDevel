// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    var newArr = [];
    var merged = arr1.concat(arr2).sort();
    //console.log(merged);

    newArr = merged.filter(function (val) {
        return !arr1.includes(val) || !arr2.includes(val);
    })

    //newArr = merged.filter(val => !arr1.includes(val) || !arr2.includes(val))
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));