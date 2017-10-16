function confirmEnding(str, target) {
    targetLen = target.length;
    str = str.substr(-targetLen);
    if (target === str)
        return true;
    else
        return false;
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));
