class TicTacToe {
  constructor(){
  this.currentPlayer = 'x';
  this.gameField = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
  }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.gameField[rowIndex][columnIndex]) {
        return;
      } else {
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
      }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {
      for (let i = 0; i < this.gameField.length; i++) {
        for (let j = 0; j < this.gameField[i].length; j++) {
          if (this.gameField[i][j] === null) {
            return false;
          }
        }
      }
      return true;
    }

    isDraw() {
    }

    getFieldValue(rowIndex, colIndex) {
      return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
