import { ROCK, PAPER, SCISSORS } from './constants';

const getRandomInt = (min, max) =>
  Math.floor((Math.random() * ((max - min) + 1)) + min);

export const simulateComputer = () => (
  getRandomInt(0, 2)
);

// parameters: number from  0 to 2 (Rock, Paper, Scissors)
// returns: number from -1 to 1
// returns winner from player 1 perspective
export const computeWinner = (choice1, choice2) => {
  if (choice1 === choice2) {
    return 0;
  }
  if (choice1 === ROCK) {
    if (choice2 === PAPER) {
      return -1;
    }
    return 1;
  }
  if (choice1 === PAPER) {
    if (choice2 === SCISSORS) {
      return -1;
    }
    return 1;
  }
  if (choice1 === SCISSORS) {
    if (choice2 === ROCK) {
      return -1;
    }
    return 1;
  }
};
