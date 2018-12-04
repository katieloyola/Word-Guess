//create array of variables for user to guess
var fruit = ["apples", "oranges", "watermelon", "strawberries", "bananas", "blueberries", "kiwi", "guava"];

//create variables for number of wins, loses, guesses left 
var wins = 0;
document.getElementById('wins').innerHTML = "Total wins: " + wins;
var losses = 0;
document.getElementById('losses').innerHTML = "Total losses: " + losses;
var guessesLeft = 9;
document.getElementById('guesses-left').innerHTML = "Guesses remaining: " + guessesLeft;
var gameRunning = false;
var numBlanks = 0;

//empty string
var pickedWord = '';

//blank arrays/placeholders - to do pushes later
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var guessedLetters = [];

//to print letters guessed onto the page
document.getElementById('guessed-letters').innerHTML = "Letters already guessed: " + guessedLetterBank;
var incorrectLetterBank = [];
var splitWord = [];


//to start a New Game function and to reset
var newGame = function () {
    //true once you click button to start new game
    gameRunning = true;
    guessesLeft = 9;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArr = [];

    //pick a NEW word
    pickedWord = fruit[Math.floor(Math.random() * fruit.length)];
    //needs split with empty variable 
    //  var splitWord= pickedWord.split(" ");
    console.log(pickedWord);

    // for loop to determine amount of blanks
    for (var i = 0; i < pickedWord.length; i++) {
        pickedWordPlaceholderArr.push("_");
    }

    //write new game info to DOM
    document.getElementById('placeholders').innerHTML = pickedWordPlaceholderArr.join(" ");
    document.getElementById('wins').innerHTML = "Total wins: " + wins;
    document.getElementById('losses').innerHTML = "Total losses: " + losses;
    document.getElementById('guesses-left').innerHTML = "Guesses remaining: " + guessesLeft;

    placeholders.textContent = pickedWordPlaceholderArr.join('');
    guessedLetters.textContent = incorrectLetterBank;
}
console.log(pickedWordPlaceholderArr)

//letterGuess function, takes in the letter you press to see if its in the selected word
function letterGuess(letter) {
    console.log(letter);

    //guessing the same letter twice doesn't count against guesses remaining
    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
        guessedLetterBank.push(letter);
        document.getElementById("guessed-letters").textContent = "Letters already guessed: " + guessedLetterBank.join(" ");
        document.getElementById("guesses-left").textContent = "Guesses remaining: " + --guessesLeft;

        //for loop to verify if guessed letter is in word
        for (var i = 0; i < pickedWord.length; i++) {
            //converting letters to lower case to match actual
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                //if guess is correct, then the letter should replace the placeholder
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }
        placeholders.textContent = pickedWordPlaceholderArr.join('');
        checkIncorrect(letter);
    }
    else {
        if (!gameRunning) {
            // alert("Click here to play again!");
            newGame();
        } else {
            alert("You have already used that letter");
        }
    }
}

//function to check for incorrect letters
function checkIncorrect(letter) {
    if (
        pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1
        && pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1) {

        //push incorrect guessed letter to guessed letter bank
        incorrectLetterBank.push(letter);
        guessedLetters.textContent = incorrectLetterBank.join(' ');
        guessesLeft.textContent = guessesLeft;
    }
    checkLoss();
}

//loss function
function checkLoss() {
    //need game to reset once guesses remaining equals zero**
    if (guessesLeft === 0) {
        losses++;
        gameRunning = false;
        losses.textContent = losses;
        alert("You lost this time - try again");
//need game to reset once a loss is acheived**
    }
    checkWin();
}
//check Win
function checkWin() {
    if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase()) {
        wins++;
        gameRunning = false;
        wins.textContent = wins;
        document.getElementById("wins").innerHTML = "Total Wins: " + wins;
       //need game to reset once a win is acheived**
        // newGame();
    }
}

//starts new game
newGame();
document.onkeyup = function (event) {
    letterGuess(event.key);
}




