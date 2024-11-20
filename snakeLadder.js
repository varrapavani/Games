const PLAYER1 = prompt('enter PLAYER-1 name :');
const PLAYER2 = prompt('enter PLAYER-2 name :');
let player1Position = 0;
let player2Position = 0;

console.log('Lets Plays SNAKE LADDER Game.......\n');
console.log('NOTE : Press Enter To Role Die \nALL THE BEST........\n');

function whoIsWinner(player1Sum, player2Sum) {
    if (player1Sum > player2Sum) {
        return PLAYER1;
    }
    return PLAYER2;
}

function ladder(position) {
    console.log('ENJOY ! you got LADDER ');
    switch (position) {
        case 4 : return 56;
        case 12 : return 50;
        case 14 : return 55;
        case 22 : return 58;
        case 41 : return 79;
        case 54 : return 88;
    }
}

function snakeByte(position) {
    console.log('Oh no ! you got SNAKE ');
    console.log('\nDont let the snake discourage you. Keep ROLLING!');

    switch (position) {
        case 28 : return 10;
        case 37 : return 3;
        case 48 : return 16;
        case 75 : return 32;
        case 94 : return 71;
        case 96 : return 42;
    }
}

function isAnythingLanded(position) {
    if (position === 28 || position === 37 || position === 48 || position === 75 || position === 94 || position === 96) {
        return snakeByte(position);
    }
    if (position === 4 || position === 12 || position === 14 || position === 22 || position === 41 || position === 54) {
        return ladder(position);
    }
    return position;
}

function getCurrentPosition(playerPosition, diceNumber) {
    const position = playerPosition + diceNumber;
    if (position > 100) {
        return isAnythingLanded(playerPosition);
    }
    return isAnythingLanded(position);
}

function roleDICE(player) {
    prompt('');
    const diceNumber = Math.floor(Math.random() * 6);
    console.log(diceNumber);
    if (player === PLAYER1) {
        return getCurrentPosition(player1Position, diceNumber);
    }
    return getCurrentPosition(player2Position, diceNumber);

}

function turn() {
    console.log(PLAYER1);
    player1Position = roleDICE(PLAYER1);
    console.log(PLAYER1 + ' at position => ' + player1Position + '\n');
    console.log(PLAYER2);
    player2Position = roleDICE(PLAYER2);
    console.log(PLAYER2 + ' at position => ' + player2Position + '\n');
    // need to change
    if (!(player1Position >= 100 || player2Position >= 100)) {
        return turn();
    }
    console.log('GAME OVER !');
    const WINNER = whoIsWinner(player1Position, player2Position);
    console.log('WINNER is ' + WINNER + '\nCONGRATULATIONS ' + WINNER);
    console.log('ENJOY...............');
    console.log('\nIMPORTANT NOTE : Give PARTY to PAVANI otherwise snake will BYTE you');
}

turn();
