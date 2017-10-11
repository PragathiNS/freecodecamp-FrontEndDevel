function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

/* function reverseString(str){
    var splitt = str.split('');
    var reversed = splitt.reverse();
    var joined = reversed.join('');
    return joined; 
} */