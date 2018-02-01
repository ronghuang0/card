import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import Battlefield from '../Battlefield/Battlefield';
import Weapon from '../Weapon/Weapon';
import { simulateComputer, compare } from '../../utils';
import { ROCK, PAPER, SCISSORS } from '../../constants';
import style from './App.css';

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
        <div className={style.counterContainer}>
          <Counter name='You' wins={playerWins} />
          <Counter name='Computer' wins={computerWins} />
        </div>
        <Battlefield
          playerSelection={playerSelection}
          computerSelection={computerSelection}
        />
        <div>
          <Weapon name='ROCK' onClick={() => this.weaponClick(ROCK)} />
          <Weapon name='PAPER' onClick={() => this.weaponClick(PAPER)} />
          <Weapon name='SCISSORS' onClick={() => this.weaponClick(SCISSORS)} />
        </div>
      </div>
    );
  }
}
