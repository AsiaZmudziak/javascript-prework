let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);


if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
    printMessage('REMIS!');
} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('TY przegrywasz :(')
} else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('TY wygrywasz :)');
} else if (argComputerMove == 'papier' && argPlayerMove == "papier") {
    printMessage('REMIS');
} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('TY wygrywasz :)');
} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('TY przegrywasz :(');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('TY wygrywasz :)');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('TY przegrywasz :(');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage('REMIS');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
    printMessage('OSZUKUJESZ!!');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
    printMessage('OSZUKUJESZ!!');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
    printMessage('OSZUKUJESZ!!');
}