
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



	$(".new").click(function () {
		$(function(){
			newGame(); 
		});
		console.log("starting new game");
	});
	

	/* Generate random number 1 - 100 */

	var secretNum = function getSecretNum(min, max) {
			return Math.floor((Math.random() * 100) + 1); 
			console.log(secretNum);
	}

	
	function newGame() {

		$('#userGuess').attr('placeholder', 'Enter your Guess'); 
		
		$('#count').text("0"); 	

		$('#guesslist').empty(); 

	};

	 newGame();

});


