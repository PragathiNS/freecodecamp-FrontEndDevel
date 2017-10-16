// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// Write a function which takes a ROT13(Rotate by 13 places) encoded string as input and returns a decoded string.

// rot13("SERR PBQR PNZC") --> "FREE CODE CAMP"

function rot13(str) {
    var newStr = "";
    var x = 0;
    for (var i = 0; i < str.length; i++) {
        x = str.charCodeAt(i);
        // not in between A-Z then leave it unchanged
        if (x < 65 || x > 90) {
            x = x;
        } 
        // If less than 78 which is N then add 13 to it so that it stays in the range of alphabets
        else if (x < 78) {
            x = x + 13;
        } 
        // If they are in A-Z range then subtract 13
        else {
            x = x - 13;
        }
        newStr += String.fromCharCode(x);
    }
    return newStr;
    /* return str.split('')
         .map(function (char) {
             //console.log(char);
             x = char.charCodeAt(0);
             //console.log(x);
             if (x < 65 || x > 90) {
                 return String.fromCharCode(x);
             } else if (x < 78) {
                 return String.fromCharCode(x + 13);
             }
             return String.fromCharCode(x - 13);
         }).join(''); */
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
