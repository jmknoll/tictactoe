
var $board = $('<div class="gameBoard"></div>')
var $box = $('<div class="gameBox"></div>')

$("document").ready(function() {
	for (i = 0; i < 9; i++){
		$board.append($box) 
		//build game board
		}
	});

// onClick change the color of the box
// change to an x or an o depending on even/odd of turn counter
// then build logic for computer's decision making process
	// start with random
	// then improve to choices based on where human player went

