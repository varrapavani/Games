let box = '';
let number = 1;
function getHorizontalLine(columns) {
  let line = '';
  for (let i = 0; i < column; i++) {
    line += '------';
  }
  return line;
}

function getBoard(rows, columns) {
  let board = '|'
  for (let i = 1; i <= columns; i++) {
    let space = number >= 10 ? '' : '0';
    board += ' ' + space + number + ' |';
    number = number + 1;
  }

  const row = getHorizontalLine(columns) + board + '\n';
  rows = rows - 1;
  if(rows !== 0) {
    box = box + row;
    getBoard(rows , columns);
  }

  return box + horizontal_line;
}
console.log(getBoard(10, 10));
