
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


});





	
/* First Hot + cold example http://scotts0rensen.github.io/hot-or-cold/#

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









/*  Second Hot + cold example http://andraroston.github.io/hot-or-cold-app/index.html#

$(document).ready(function(){


	var answerNumber = function() {
			computerNumber = Math.floor(Math.random() * 101);
				console.log(computerNumber);
				return computerNumber;
	};

	answerNumber();

	var counter = 0;
	var counting = function(){
  		counter += 1;
   		$('#count').replaceWith("<span id='count'>" + counter + "</span>");
  	};

	function gamePlay() { 

		var guessNumber = $("#userGuess").val();
			console.log(guessNumber);	

		computerNumber;

		var guessChecker = (Math.abs(guessNumber - computerNumber));
			console.log(guessChecker);


		if(guessChecker === 0) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You got it right - press the New Game button to start again!" + "</h2>");
		}

		else if(guessChecker >= 30 && guessChecker <=49) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're cold!" + "</h2>");
		}

		else if(guessChecker >= 20 && guessChecker <=29) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're warm!" + "</h2>");
		}

		else if(guessChecker >= 10 && guessChecker <=19) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're hot!" + "</h2>");
		}

		else if(guessChecker >= 1 && guessChecker <=9) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're burning up!" + "</h2>");
		}

		else {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're freezing!" + "</h2>");
		}

	};


	$("#guessButton").on("click", function(){
		
		event.preventDefault();

		var guessNumber = $("#userGuess").val();
			if(guessNumber > 0 && guessNumber < 101) {
				$("#guessList").append("<li>" + guessNumber + "</li>");
				gamePlay();
				counting();
			} else {
			alert("Not a valid number, try again!")
			}
			$("#userGuess").val(" ");
		
	}); 

	$(".new").on("click", function() {
		$("#guessList").empty();
		answerNumber();
		var counter = 0;
		$("#feedback").replaceWith("<h2 id='feedback'>" + "Make your Guess!" + "</h2>");
		$('#count').replaceWith("<span id='count'>" + 0 + "</span>");

	})

	--- Display information modal box ---

  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	--- Hide information modal box ---

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

*/