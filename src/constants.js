export const ROCK = 0;
export const PAPER = 1;
export const SCISSORS = 2;
// export const WIN = 'win';
// export const LOSS = 'loss';
// export const TIE = 'tie';


export const numToWeaponMap = {
  0: 'rock',
  1: 'paper',
  2: 'scissors',
};

// from player1 perspective
export const numToResultMap = {
  '-1': 'Lose',
  0: 'Tie',
  1: 'Win',
};

// from player1 perspective
export const numToVerbResultMap = {
  '-1': 'loses to',
  0: 'ties',
  1: 'beats',
};

export const map = {
  [ROCK]: {
    [ROCK]: 'Rock meets Rock',
    [PAPER]: 'Paper covers Rock',
    [SCISSORS]: 'Rock blunts Scissors',
  },
  [PAPER]: {
    [ROCK]: 'Paper covers Rock',
    [PAPER]: 'Paper meets Paper',
    [SCISSORS]: 'Scissors cut Paper',
  },
  [SCISSORS]: {
    [ROCK]: 'Rock blunts Scissors',
    [PAPER]: 'Scissors cut Paper',
    [SCISSORS]: 'Scissors meets Scissors',
  },
};
