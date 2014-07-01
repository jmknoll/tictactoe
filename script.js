$(document).ready(function(){

//var $board = $('<div class="gameBoard"></div>')
var $gameBox = "<div class='gameBox'></div>"

for (x=0; x<9; x++){
	$(".gameBoard").append($gameBox); 
		//build game board
		}

var imageCounter = 0

	$('.gameBox').click(function(){

		$(this).css('background-image','url(images/x.png)');
	});
// onClick change the color of the box
// change to an x or an o depending on even/odd of turn counter
// then build logic for computer's decision making process
	// start with random
	// then improve to choices based on where human player went

});