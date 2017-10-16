function findLongestWord(str){
    var words = str.split(' ');
    var longest = words[0].length;
   for(var i = 1; i < words.length; i++){
       if(words[i].length > longest){
           longest = words[i].length;
       }
   }
    return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord("Google do a barrel roll"));
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));