
const CELL_VALUE = {
  CROSS: 'cross',
  CIRCLE: 'circle',
  WIN: 'win',
};

const GAME_STATUS = {
  PLAYING: 'playing',
  ENDED: 'ended',
  X_WIN: 'X',
  O_WIN: 'O',
};

export default class TicTacToe {
  constructor() {
    this.currentTurn = CELL_VALUE.CROSS;
    this.isGameEnded = false;
    // this.cellValues = ['', '', '', '', '', '','', '', '',];
    this.cellValues = (new Array(9)).fill('');
  }

  getCellList() {
    const selector = '.game .game-board ul.board-cells-list > li';
    const cellList = document.querySelectorAll(selector);
    return Array.from(cellList);
  }

  getCellAtIndex(index) {
    const selector = `.game .game-board ul.board-cells-list > li:nth-child(${index + 1})`;
    return document.querySelector(selector);
  }

  toggleCurrentTurn(currentTurn) {
    return currentTurn === CELL_VALUE.CROSS
      ? CELL_VALUE.CIRCLE
      : CELL_VALUE.CROSS;
  }

  setCurrentTurnElement(currentTurn) {
    const currentTurnElement = document.querySelector('#currentTurn');
    if (currentTurnElement) {
      currentTurnElement.classList.remove(CELL_VALUE.CROSS);
      currentTurnElement.classList.remove(CELL_VALUE.CIRCLE);
      currentTurnElement.classList.add(currentTurn);
    }
  }

  checkGameStatus(cellValues) {
    let status = GAME_STATUS.PLAYING;
    let winPositions = [];

    // Check win lose
    const checkedSets = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    const winIndex = checkedSets.findIndex(set => {
      const first = cellValues[set[0]];
      const second = cellValues[set[1]];
      const third = cellValues[set[2]];

      return first !== '' && first === second && second === third;
    });

    if (winIndex >= 0) {
      winPositions = checkedSets[winIndex];
      const winCellValue = cellValues[winPositions[0]];

      status = winCellValue === CELL_VALUE.CROSS
        ? GAME_STATUS.X_WIN
        : GAME_STATUS.O_WIN;
    } else {
      // Check game ended
      const emptyCells = cellValues.filter(x => x === '');
      if (emptyCells.length === 0) {
        status = GAME_STATUS.ENDED;
      }
    }

    return {
      status,
      winPositions,
    };
  }

  highlightWinCells(winPositions) {
    console.log('Highlight win cells');
    for (const position of winPositions) {
      const cell = this.getCellAtIndex(position);
      if (cell) {
        cell.classList.add(CELL_VALUE.WIN);
      }
    }
  }

  handleCellClick(cell, index) {
    const isAlreadyClicked = this.cellValues[index] !== '';
    if (!cell || isAlreadyClicked) return;

    console.log('Cell click', cell, index);
    cell.classList.add(this.currentTurn);

    // Update cellValues state
    this.cellValues[index] = this.currentTurn;

    // Check game status
    const { status, winPositions } = this.checkGameStatus(this.cellValues);
    switch (status) {
      case GAME_STATUS.PLAYING:
        console.log('Choi tiep');
        // Toggle current turn
        this.currentTurn = this.toggleCurrentTurn(this.currentTurn);
        this.setCurrentTurnElement(this.currentTurn);
        break;
      case GAME_STATUS.ENDED:
        console.log('Game over');
        this.isGameEnded = true;
        break;
      case GAME_STATUS.X_WIN:
      case GAME_STATUS.O_WIN:
        console.log('Someone win');
        this.isGameEnded = true;
        this.highlightWinCells(winPositions);
        break;
      default:
        console.log('Tui khong biet oi do!!! :P');
    }
  }

  init() {
    console.log('Init roi nha!!!');
    // Find 9 cells
    // For each cell: add event click
    const cellList = this.getCellList();
    console.log(cellList);
    // for (const cell of cellList) {
    //   cell.addEventListener('click', () => this.handleCellClick(cell))
    // }

    cellList.forEach((cell, index) => {
      cell.addEventListener('click', () => this.handleCellClick(cell, index));
    });
  }
}
