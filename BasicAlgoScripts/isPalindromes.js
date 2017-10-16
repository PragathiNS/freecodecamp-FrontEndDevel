// Remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

function isPalindrome(str){
    var lc = str.toLowerCase();
    var r = lc.replace(/[\W_]/g, '');
    //console.log(r);
    var rStr = r.split('').reverse().join('');
    //console.log(rStr);
    if(r == rStr)
        return true;
    else
        return false;
}

//console.log("Eye".toLowerCase());
console.log(isPalindrome("My age is 0, 0 si ega ym."));