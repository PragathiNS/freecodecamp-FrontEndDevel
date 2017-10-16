// Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

//All values are truthy unless they are defined as falsy (i.e. except for false, 0, "", null, undefined and NaN).

// Boolean returns true for truthy and returns false for falsy values

function bouncer(arr) {
    return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));