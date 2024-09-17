class Print {
  constructor(computerMove, userMove, winner, secretKey) {
    this.computerMove = computerMove;
    this.userMove = userMove;
    this.winner = winner;
    this.secretKey = secretKey;
  }
  printResult() {
    console.log(`Computer move: ${this.computerMove}`);
    console.log(`Your move: ${this.userMove}`);
    console.log(this.winner);
    console.log(`HMAC key: ${this.secretKey}`);
  }
}

module.exports = Print;
