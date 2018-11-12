//My array
var word = ["berries", "apple", "banana", "orange", "grapes"];

//list of meaningful varaiables
//Holds computers guess
var computerGuess = "";
//holds the letters
var lettersInWord = [];
//holds the number of blanks
var numBlanks = 0;
//holds number or blanks and correct guesses
var blanksAndSuccesses = [];
//holds wrong guesses
var wrongLetters = [];
//counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;

//the begin function
function startGame() {
    //chooses word at random from array
    computerGuess = word[Math.floor(Math.random() * word.length)];
    //splits the word into letters - W3 schools
    lettersInWord = computerGuess.split('');
    //populates number of blanks
    numBlanks = lettersInWord.length;


    rightGuessCounter = 0;
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    doubleWord = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



    //for loop to populate the blanks
    for(var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push('_');
        document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
    }

    //Manipulate the DOM
    document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = loseCount;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;

    //Console logging
    console.log(chooseWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function compareLetters(userKey) {
    //If user key exists in choose word then perform function
    if(computerGuess.indexOf(userKey) > -1) {
        //for loop to determine amount of blanks
        for(var i = 0; i < numBlanks; i++) {
            if(lettersInWord[i] === userKey) {
                rightGuessCounter++;
                blanksAndSuccesses[i] = userKey;
                document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(" ");
            }
        }
        //testing/debug
        console.log(blanksAndSuccesses)
    }
    //incorrect guesses
    else {
        wrongLetters.push(userKey);
        guessesLeft--;
        //Manipulate the DOM
        document.getElementById("numGuesses").innerHTML = guessesLeft;
        document.getElementById("wrongGuesses").innerHTML = wrongLetters;
        //test/debug
        console.log("Wrong letter's guessed:" + wrongLetters);
        console.log("Guesses left:" + guessesLeft);
    }

    function winLose() {
        if (rightGuessCounter === numBlanks) {
            //counts number of wins
            winCount++;
            //manipulates the DOM
            document.getElementById("winCounter").innerHTML = winCount;
            alert("You win!!!");
            reset();
        }
        //when number of guesses reaches 0, you lose
        else if (guessesLeft === 0) {
            //count losses
            loseCount++;
            //Manipulate the DOM
            document.getElementById("lossCounter").innerHTML = loseCount;
            alert("you lose");
            reset();
        }
    }

    startGame();
    document.onkeyup = function (event) {
        test = true;
        var letterGuessed = event.key;
        for (var i = 0; i < doubleWord.length; i++) {
            if (letterGuessed === doubleWord[i] && test === true) []
        };
    };
};


