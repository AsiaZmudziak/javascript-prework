function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function playGame(playerInput) {

    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove)
}

function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Wygrałeś!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Przegrałeś!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Przegrałeś!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Wygrałeś!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Wygrałeś!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Przegrałeś!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis')
        }
 }

function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
}


var buttonRock = document.getElementById('play-stone');
var buttonPaper = document.getElementById('play-paper');
var buttonScissors = document.getElementById('play-scissors');

buttonRock.addEventListener('click', function(){ playGame(1); });
buttonPaper.addEventListener('click', function(){  playGame(2); });
buttonScissors.addEventListener('click', function(){  playGame(3); }); 