// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.
function getUserGuess(secretNumber, maxAttempts) {
  console.log('Take a guess! (Remaining attempts: ' + maxAttempts + ')');
  
  if (maxAttempts === 0) {
    console.log("Oh no! You've used all your attempts. Better luck next time!");
    return '';
  }
  const userNumber = +prompt('Guess a Secret Number : ');
  
  if (userNumber + '' === 'NaN') {
    console.log('Invalid input! Please enter a number.');
    getUserGuess(secretNumber, maxAttempts);
  }

  if (userNumber > secretNumber) {
    console.log(userNumber + 'Too high! Try a smaller number.');
  }
  if (userNumber < secretNumber) {
    console.log(userNumber + 'Too low! Try a higher number.');
  }
  if (userNumber === secretNumber) {
    console.log("Bravo! You've nailed it. The number was " + secretNumber + '!');
    return '';
  }
  getUserGuess(secretNumber, maxAttempts - 1);
}

function playGame(rangeStart, rangeEnd, maxAttempts) {
  const range = rangeEnd - rangeStart;
  const secretNumber = Math.round(Math.random() * range) + rangeStart;

  getUserGuess(secretNumber, maxAttempts);

  if (confirm('Do you want to play again')) {
    playGame(rangeStart, rangeEnd, maxAttempts)
  } else {
    console.log('Goodbye');
  }
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  console.log('Welcome to Guess the Number!');
  console.log('The secret number is between ' + rangeStart + ' and ' + rangeEnd + '. You have ' + maxAttempts + ' attempts to find it.\n');

  playGame(rangeStart, rangeEnd, maxAttempts);
}

startGame(100, 200, 6);
