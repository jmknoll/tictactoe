$(document).ready(function(){


var $gameBox = "<div class='gameBox'></div>"

for (x=0; x<9; x++){
	//build game board
	$(".gameBoard").append($gameBox); 
		}

var imageCounter = 0

numPlayers = prompt("1 Player or 2?", "2")

//this is the code for the two-player version
if (numPlayers == 2){

	$('.gameBox').click(function(){

		if (imageCounter % 2 == 0){

			$(this).css('background-image','url(images/x.png)');
			imageCounter = imageCounter + 1;

		} else {
		
			$(this).css('background-image','url(images/o.png)');
			imageCounter = imageCounter + 1;

			}
		});

} else {
	$('.gameBox').click(function(){

		$(this).css('background-image','url(images/x.png)');
		imageCounter = imageCounter + 1;

		});

}

//this is the code for the ai version
//comment out with a docstring to run the two-player version

// next steps
//
// 1. implement ai version 
// 2. add a function to play two-player or single-player version

});