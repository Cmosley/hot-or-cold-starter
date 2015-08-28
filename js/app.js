
var guessCount = 0; 
var guess;

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	/* Start new game */ 
	$(".new").click( newGame );
		console.log("starting new game");
	
	newGame;

	/* Generate random number 1 - 100 */

	

	
	

});

 /* New game and its required functions */

	function newGame() {
		resetGuessList();
		resetGuessCount();
		getSecretNum();
		setFeedback('Make your Guess!');
	}

		
		function resetGuessList() {
			$('#guesslist').empty(); 
		}

		function resetGuessCount() {
 	 	setGuessCount(0);
		}

		function getSecretNum(min, max) {
				return Math.floor((Math.random() * 100) + 1); 
				console.log(secretNum);
		}

			function setFeedback(feedback) {
			  $("h2#feedback").text(feedback);
			}

			function getFeedback(guess) {
	  		var feedback;


/* Functions required to handle user guesses */


	function guessHandler(event) {
	  event.preventDefault();

	  incrementGuessCount();
	  var guess = getGuess();
	  addGuessToList(guess);
	  setFeedback( getFeedback(guess) );

	  clearGuess();

			function incrementGuessCount() {
			  setGuessCount(guessCount+1);
			}

			function getGuess() {
			  return $("#userGuess").val();
			}

			function addGuessToList(guess) {
			  var listItem = $("<li>" + guess + "</li>");
			  $("#guessList").append(listItem);
			}

			function clearGuess() {
		 	 $("#userGuess").val("");
			}

	

	

	function setGuessCount(guessCnt) {
	  guessCount = guessCnt;
	  $("span#count").text(guessCount);
	}


	function getFeedback(guess) {
	  var feedback;

	  var diff = Math.abs(guess-answer);
	  if (diff >= 50) feedback = "Ice Cold";
	  else if (diff >= 30) feedback = "Cold";
	  else if (diff >= 20) feedback = "Warm";
	  else if (diff >= 10) feedback = "Hot";
	  else if (diff >= 5) feedback = "Very Hot";
	  else if (diff >= 1) feedback = "Burning Up!";
	  else feedback = "Correct! You win!";

	  if (diff > 0)
	    feedback += " (you are too " + (guess > answer ? "high" : "low") + ")";

	  return feedback;
	}

	
/*

			function newGame() {
			  resetGuessCount();
			  generateAnswer();
			  setFeedback("Make your guess!");
			  resetGuessList();
			}

			function guessHandler(event) {
			  event.preventDefault();

			  incrementGuessCount();
			  var guess = getGuess();
			  addGuessToList(guess);
			  setFeedback( getFeedback(guess) );

			  clearGuess();
			}

			function resetGuessCount() {
			  setGuessCount(0);
			}

			function incrementGuessCount() {
			  setGuessCount(guessCount+1);
			}

			function setGuessCount(guessCnt) {
			  guessCount = guessCnt;
			  $("span#count").text(guessCount);
			}

			function setFeedback(feedback) {
			  $("h2#feedback").text(feedback);
			}

							function generateAnswer() {
							  answer = Math.floor((Math.random() * MAXIMUM_ANSWER) + 1);
							}

			function clearGuess() {
			  $("#userGuess").val("");
			}

			function getGuess() {
			  return $("#userGuess").val();
			}

			function resetGuessList() {
			  $("#guessList").empty();
			}

			function addGuessToList(guess) {
			  var listItem = $("<li>" + guess + "</li>");
			  $("#guessList").append(listItem);
			}

			function getFeedback(guess) {
			  var feedback;

			  var diff = Math.abs(guess-answer);
			  if (diff >= 50) feedback = "Ice Cold";
			  else if (diff >= 30) feedback = "Cold";
			  else if (diff >= 20) feedback = "Warm";
			  else if (diff >= 10) feedback = "Hot";
			  else if (diff >= 5) feedback = "Very Hot";
			  else if (diff >= 1) feedback = "Burning Up!";
			  else feedback = "Correct! You win!";

			  if (diff > 0)
			    feedback += " (you are too " + (guess > answer ? "high" : "low") + ")";

			  return feedback;
			}

			*/