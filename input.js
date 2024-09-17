const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

const selectIndividualMove = async (choices = []) => {
  ["exit", "help?"].forEach((item) => choices.push(item));
  let userMove = "";
  const questions = [
    {
      type: "list",
      name: "userMove",
      message: "Enter your move:",
      choices: choices,
    },
  ];

  try {
    const answers = await prompt(questions);
    userMove = answers.userMove;
  } catch (error) {
    console.log(error);
  }
  return userMove;
};

module.exports = selectIndividualMove;
