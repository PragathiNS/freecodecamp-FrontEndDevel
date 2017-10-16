// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num);
    
    arr.sort(function(a,b){
        return a - b;
    });
    
    /* for(var i = 0; i < arr.length; i++){
        if(arr[i] >= num){
            return i;
        }
    }
    return arr.length;  */
    return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([2, 20, 10], 19));