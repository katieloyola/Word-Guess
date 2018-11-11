//Build an array
var fruit = ["berries", "apple", "banana", "orange", "grapes"]

//computer chooses word randomly - log it
var computerGuess = fruit[Math.floor(Math.random() * fruit.length)];
console.log(computerGuess);
var underScore = [];

//create underscores based on length of word
//berries needs 7, banana, orange and grapes needs 6, apple needs 5
var generateUnderscore = () => {
    //create for loop
    for (var i = 0; i < fruit.length; i++) {
        underScore.push("_");
    }
    return underScore;
}
console.log(generateUnderscore());

//capture players guess using an event
document.addEventListener("keypress", (event) => {
//log letters pressed
    console.log(event);
//replace underscores with correct letters pressed - W3 schools event keyCode
var keycode = event.keyCode;
var keyword = String.fromCharCode(keycode);
console.log(keyword);

});
//check if guess fills in a letter
//replace/add underscore with correct letter
//track correct and incorrect guesses