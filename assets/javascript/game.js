//My array
var word = ["strawberries", "apple", "banana", "orange", "grapes", "kiwi", "watermelon"];

//computer chooses word randomly
var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

console.log(choosenWord);

//Manipulate the DOM
var docUnderScore = document.getElementById("underscore");
var docRightGuess = document.getElementById("rightGuess");
var docWrongGuess = document.getElementById("wrongGuess");

//=============================================
//create underscores based on length of word
//berries needs 7, banana, orange and grapes needs 6, apple needs 5
var generateUnderscore = () => {
    //create for loop
    for (var i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderscore());
//capture users guess using an event
document.addEventListener("keypress", (event) => {
    //log letters pressed
    console.log(event);
    //replace underscores with correct letters pressed - W3 schools event keyCode
    var keyword = String.fromCharCode(event.keyCode);
    //insert conditional statements - log in console right and wrong guesses
    if (choosenWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);
        //replace underscore with letter guessed
        underScore[choosenWord.indexOf(keyword)] = keyword;
        console.log(underScore);
        //log to see if correct letter is going in right guess array
        console.log(rightWord);
        }
    else {
        wrongWord.push(keyword);
        //log to see if incorrect letter is going in wrong guess array
        console.log(wrongWord);
    }
    
});

