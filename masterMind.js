function isInvalidPeg(userInput) {
  for (let index = 0; index < userInput.length; index++) {
    const peg = userInput[index];
    if (peg < 1 || peg > 8) {
      return false;
    }
  }
  return true;
}

function takeUserInput() {
  const userInput = prompt('enter 4 pegs ');
  const invalidPeg = isInvalidPeg(userInput);
  const isNan = isNaN(userInput);
  if (isNan || +userInput === 0 || userInput.length !== 4 || !invalidPeg) {
    console.log('Invalid Input ');
    return takeUserInput();
  }
  return userInput;
}

function isPresent(secretNumber, randonNumber) {
  for (let i = 0; i < secretNumber.length; i++) {
    if (secretNumber[i] === randonNumber + '') {
      return true
    }
  }
  return false;
}

function makeSecretCode() {
  let secretNumber = '';
  while (secretNumber.length !== 4) {
    const randonNumber = Math.ceil(Math.random() * 7);
    if (!isPresent(secretNumber, randonNumber)) {
      secretNumber += randonNumber;
    }
  }
  return secretNumber;
}

function startGame() {
  let chances = 10;
  let userCode = '';
  const secretCode = makeSecretCode();
  while (isGameOver(secretCode, userCode) || chances === 0) {
    userCode = takeUserInput();
    const positionMatch = isPositionMatch(secretCode, userCode);
  }
}