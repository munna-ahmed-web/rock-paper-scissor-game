class CheckWinner {
  checkWinner(winNumber) {
    if (winNumber == 1) {
      return "You win!";
    } else if (winNumber == -1) {
      return "Computer Win!";
    } else {
      return "It's tie";
    }
  }
}

class Game {
  constructor(moves) {
    this.moves = moves;
    this.totalMoves = this.moves.length;
    this.half = Math.floor(this.totalMoves / 2);
  }

  calculateWinner(computerMove, userMove) {
    const result = Math.sign(
      ((computerMove - userMove + this.half + this.totalMoves) %
        this.totalMoves) -
        this.half
    );
    const { checkWinner } = new CheckWinner();
    return checkWinner(result);
  }
}

module.exports = Game;
