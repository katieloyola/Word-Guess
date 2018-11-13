//create variables for guessing game 
var fruit = ["apples", "oranges", "watermelon", "strawberries", "bananas", "blueberries", "kiwi", "guava"];

//cant seem to get underscores to match word chosen
// var wordLength = wordBank.length;
// var placeholders = "";
// for (i = 0; i < wordLength; i++) {
//     placeholders = placeholders + "_"
// }

//Computer randomly picks a word

// var randNum = Math.floor(Math.random() * fruit.length);
// var pickedWord = fruit[randNum];
// console.log(pickedWord);

//Manipulate the DOM - by element and id
// document.getElementById('new-game-button').innerHTML = newGameButton;
// document.getElementById('guessed-letters').innerHTML = guessedLetters; 

//variables
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
document.getElementById('guessed-letters').innerHTML = "Letters already guessed: " + guessedLetterBank; 
var incorrectLetterBank = [];
var splitWord = [];


//to start a New Game function and to reset
function newGame() {
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
   
    console.log(pickedWordPlaceholderArr)
    document.getElementById('placeholders').innerHTML = pickedWordPlaceholderArr.join(" "); 
    //write new game info to DOM
    guessesLeft.textContent = guessesLeft;
    placeholders.textContent = pickedWordPlaceholderArr.join('');
    guessedLetters.textContent = incorrectLetterBank;
}
console.log(pickedWordPlaceholderArr)

//letterGuess function, takes in the letter you press to see if its in the selected word
function letterGuess(letter) {
    console.log(letter);
    //so guessing the same letter twice doesn't hurt you
    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
        guessedLetterBank.push(letter);
        document.getElementById("guessed-letters").textContent = guessedLetterBank;
        console.log(guessedLetterBank);

        //to check if guessed letter is in word
        for (var i = 0; i < pickedWord.length; i++) {
            //converting letters to lower case to match actual
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                //if guess is correct, then the letter should replace the placeholder
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }
        console.log(pickedWordPlaceholderArr);
        placeholders.textContent = pickedWordPlaceholderArr.join('');
        checkIncorrect(letter);
    }
    else {
        if (!gameRunning) {
            alert("Click start to begin");
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
        guessesLeft--;
        incorrectLetterBank.push(letter);
        guessedLetters.textContent = incorrectLetterBank.join(' ');
        guessesLeft.textContent = guessesLeft;
    }
    checkLoss();
}

//define check loss function
function checkLoss() {
    if (guessesLeft === 0) {
        losses++;
        gameRunning = false;
        losses.textContent = losses;
    }
    checkWin();
}
//checkWin
function checkWin() {
    if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase()) {
        wins++;
        gameRunning = false;
        wins.textContent = wins;
    }
}
//add event listener for newGame button
// newGameButton.addEventListener('click', newGame);

// var el = document.getElementById('click');
// console.log(el);
// if (el) {
//     el.newGameButton.addEventListener('click', newGame);
// }

//add onkeyup event to trigger letterGuess - keys 65-90 - A-Z
newGame();
document.onkeyup = function (event) {
    console.log(event.key);
   // if (event.keycode >= 65 && event.keycode <= 90) {
        letterGuess(event.key);
        checkWin();
        checkLoss();
   // }
}


