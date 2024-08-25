export function concatStrings(secondWord, firstWord){
    var secondWord = "Hi,";
    var firstWord = " cute!";
    var fullWord = secondWord.concat(firstWord);
    return fullWord;
}

alert(concatStrings());
