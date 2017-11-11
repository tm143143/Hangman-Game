window.onload = (function() {
//Press any key to start

//Word Array of South Austin Streets
var streets = ['Manchaca', 'Lamar', 'Slaughter', 'Riverside', 'Oltorf' ];

//"manchaca".split"

//Underscores based on word length
// .split function
//User Guess

var wins = 0;

var correctLetters = 0;	

var losses = 0;

var guessesRemaining = 0;

var start = false



var LettersAlreadyGuessed = []
 document.onkeyup = function(event){console.log (event.key);
	var key = event.key;
		if (guessesRemaining == 0 && start == false){
			var randomNumber = Math.floor(Math.random() * streets.length);
				var randomStreets = streets[randomNumber];
					//.split function
					console.log(randomStreets); 
						guessesRemaining = guessesRemaining + 9;
							console.log(guessesRemaining);
								start = true;


}       else if ( correctLetters = .length)
} 

//function splitWord (word) = { word.split("");}


//if User correct, push to correct array
//if User wrong, push to LettersAlreadyGuessed array
//Number or Guesses remaining



})