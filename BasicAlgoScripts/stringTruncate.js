// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {
    var retStr = "";
    var endStr = "...";
    if (str.length > num) {
        // truncate
        if (num <= 3) {
            retStr = str.slice(0, num).concat(endStr);
        } else {
            retStr = str.slice(0, num - 3).concat(endStr);
        }
    } else {
        return str;
    }

    return retStr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
/*str = "A-tisket a-tasket A green and yellow basket";
num = 11;
var rr = str.slice(0, num - 3).concat("...");
console.log(rr); */