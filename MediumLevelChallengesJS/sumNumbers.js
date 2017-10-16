function sumAll(arr) {
   var sum = 0;
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
  for(var i = min; i <= max; i++){
      //console.log(i);
    sum += i;
  }  
    return sum;
}

console.log(sumAll([10, 5]));

