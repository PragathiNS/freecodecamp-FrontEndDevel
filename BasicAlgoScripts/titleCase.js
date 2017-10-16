// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str){
    var words = str.split(' ');
    //console.log(words)
    for(var i = 0; i < words.length; i++){
        words[i] = words[i].toLowerCase().split('');
        words[i][0] = words[i][0].toUpperCase();
        words[i] = words[i].join('');
    }
    return words.join(' ');
}


function titleCaseBetter(str){
    var words = str.toLowerCase().split(' ');
    var retStr = words.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return retStr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCaseBetter("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
