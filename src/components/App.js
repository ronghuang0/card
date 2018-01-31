import React, { Component } from 'react';
import PlayerCounter from './PlayerCounter';
import ComputerCounter from './ComputerCounter';
import CurrentResult from './CurrentResult';
import Rock from './Rock';
import Paper from './Paper';
import Scissors from './Scissors';
import { simulateComputer, compare } from '../utils';
import { ROCK, PAPER, SCISSORS } from '../constants';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerWins: 0,
      computerWins: 0,
    };
    this.weaponClick = this.weaponClick.bind(this);
  }

  weaponClick(weapon) {
    const computerSelection = simulateComputer();
    // 1 means first argument wins, -1 means second argument wins, 0 is tie
    const winner = compare(weapon, computerSelection);
    this.setState(({ playerWins, computerWins }) => (
      {
        playerSelection: weapon,
        computerSelection,
        playerWins: winner === 1 ? playerWins + 1 : playerWins,
        computerWins: winner === -1 ? computerWins + 1 : computerWins,
      }
    ));
  }
  render() {
    const {
      playerWins,
      computerWins,
      playerSelection,
      computerSelection,
    } = this.state;

    return (
      <div>
        <PlayerCounter wins={playerWins} />
        <ComputerCounter wins={computerWins} />
        <CurrentResult
          playerSelection={playerSelection}
          computerSelection={computerSelection}
        />
        <div>
          <Rock onClick={() => this.weaponClick(ROCK)} />
          <Paper onClick={() => this.weaponClick(PAPER)} />
          <Scissors onClick={() => this.weaponClick(SCISSORS)} />
        </div>
      </div>
    );
  }
}
