const game = () => {
    for (let round =1; round < 6; round++) {
    console.log(`ROUND ${round}`);

let playerSelection = prompt(`ROUND ${round}: Enter your selection: Rock, Paper, or Scissors?`);
playerSelection = playerSelection.toUpperCase();

let computerSelection;
    
let computerPlay = (Math.floor(Math.random() * 3));

    switch (computerPlay) {
        case 0: computerSelection = 'ROCK';
        break;

        case 1: computerSelection = 'PAPER';
        break;

        case 2: computerSelection = 'SCISSORS';
        break;
    }

console.log(`Computer Chooses: ${computerSelection}`);
console.log(`You Choose: ${playerSelection}`);

let compareSelection = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {

        console.log("It's a tie");

    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {

        console.log('You lose: Paper covers Rock!');

    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {

        console.log('You WIN!!!: Rock breaks Scissors!');

    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {

    console.log('You lose: Scissors cut Paper!');

    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {

    console.log('You WIN!!!: Paper covers Rock!');

    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {

        console.log('You WIN!!!: Scissors cut Paper!');

    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {

        console.log('You lose: Rock breaks Scissors!');
    
    } else {
        round = round-= 1;
        console.log('No cheating!  Only enter Rock, Paper, or Scissors');
    }
}
compareSelection(playerSelection, computerSelection);
};
}
game();