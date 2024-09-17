const selectIndividualMove = require("./input");
const Print = require("./print");
const Game = require("./winner");
const Table = require("./table");
const Utils = require("./utils");

const mainFunc = async (moves = []) => {
  const computerMoveIdx = Math.floor(Math.random() * moves.length);
  const computerMove = moves[computerMoveIdx];
  const { generateSecretKey, generateHMAC } = new Utils();
  const secretKey = generateSecretKey();
  const hmac = generateHMAC(computerMove, secretKey);
  console.log("HMAC:", hmac);
  const userMove = await selectIndividualMove(moves);
  const userMoveIdx = moves.indexOf(userMove);
  if (userMove == "exit") {
  } else if (userMove == "help?") {
    const { generateTable } = new Table();
    generateTable();
  } else {
    const game = new Game(moves);
    const winner = game.calculateWinner(computerMoveIdx, userMoveIdx);
    const print = new Print(computerMove, userMove, winner, secretKey);
    print.printResult();
  }
};

const moves = process.argv.splice(2);
if (moves.length % 2 == 0 || moves.length <= 2) {
  console.log("Please enter moves at least three or more and odd");
} else {
  mainFunc(moves);
}
