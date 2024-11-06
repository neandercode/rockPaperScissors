let getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (["rock", "paper", "scissors"].includes(userInput)) {
    return userInput;
  } else {
    console.log("please choose rock paper or scissors");
  }
};
/*Chapter 1*/
let getComputerChoice = () => {
  return Math.floor(Math.random() * 3);
};

let choice = getComputerChoice();
if (choice === 0) {
  console.log("Computer chose Rock");
} else if (choice === 1) {
  console.log("Computer chose Paper");
} else {
  console.log("Computer chose Scissors");
}
/*Chapter 2*/
let determineWinner = (userChoice, computerChoice) => {
  if (userChoice == computerChoice) {
    console.log("Tie Game! Play again");
  }
  if (userChoice === 0) {
    console.log("You chose Rock");
  }
  if (computerChoice === 1) {
    console.log("Computer chose Paper, you lose");
  } else {
    console.log("You win!");
  } //rock
  if (userChoice === 1) {
    console.log("You chose Paper");
  }
  if (computerChoice === 2) {
    console.log("Computer chose Scissors, you lose");
  } else {
    console.log("You win!");
  } //paper
  if (userChoice === 2) {
    console.log("You chose Scissors");
  }
  if (computerChoice === 0) {
    console.log("Computer chose Rock, you lose");
  } else {
    console.log("You win!");
  } //Scissors
};
/*Chapter 3*/
let playGame = () => {
  let userChoice = getUserChoice("rock", "paper", "scissors");

  let computerChoice = getComputerChoice();

  //console.log(playGame);
  console.log(determineWinner(userChoice, computerChoice));
};
