
let myName ="Irina";

function greet(myName){
    alert(`Привет , ${myName}!`);
}

greet(myName);


function celsiusToFahrenheit (c){
    const w = 1.8;
    const b = 32;
    const f = c * w + b;
    return f;
}

alert(celsiusToFahrenheit(10));


function calculateFallDistance(t){
    const g = 9.8;
    const d = (1/2)*g*t^2;
    return d;
}

alert(calculateFallDistance(25));


function calculateAverage(a, b, c){
    let result = (a+b+c)/3;
    return result;
}

alert(calculateAverage(3, 21, 24));


function concatStrings(secondWord, firstWord){
    var secondWord = "Hi,";
    var firstWord = " cute!";
    var fullWord = secondWord.concat(firstWord);
    return fullWord;
}

alert(concatStrings());
