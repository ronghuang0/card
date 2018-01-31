import { ROCK, PAPER, SCISSORS } from './constants';

function getRandomInt(min, max) {
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

export const simulateComputer = () => (
  getRandomInt(0, 2)
);

export const compare = (choice1, choice2) => {
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

export const comparison = (choice1, choice2) => {
  if (compare(choice1, choice2) === 0) {
    return 'ties';
  }
  if (compare(choice1, choice2) === 1) {
    return 'beats';
  }
  if (compare(choice1, choice2) === -1) {
    return 'loses to';
  }
};
