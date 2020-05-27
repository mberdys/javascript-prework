function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let argButtonName, buttonRock, buttonPaper, buttonScissors, playerWin, computerWin, result;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
playerWin = 0;
computerWin = 0;

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
	var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
	function getMoveName(argMoveId) {
	  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
	  if (argMoveId == 1) {
	    return 'kamień';
	  } else if (argMoveId == 2) {
			return 'papier';
		} else if (argMoveId == 3) {
			return 'nożyce';
		} else {
	    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
	    return 'kamień';
	  }
	}

	function displayResult(argPlayerMove, argComputerMove) {
	  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ',' + argComputerMove);
	  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
	    printMessage('Wygrywasz!');
			playerWin = playerWin + 1;
	  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
	  	printMessage('Wygrywasz!');
			playerWin = playerWin + 1;
	  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
	  	printMessage('Wygrywasz!');
			playerWin = playerWin + 1;
	  } else if (argPlayerMove ==  argComputerMove) {
			printMessage('Remis!');
	  } else {
	    printMessage('Przegrywasz :(');
			computerWin = computerWin + 1;
	  }
	  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
		document.getElementById('result').innerHTML = playerWin + '-' + computerWin;
	}
	playerMove = argButtonName;
	console.log('ruch gracza to: ' + playerMove);
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);
	computerMove = getMoveName(randomNumber);
	console.log('ruch komputera to: ' + computerMove);
	displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
