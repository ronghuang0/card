import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import Battlefield from '../Battlefield/Battlefield';
import WeaponSelect from '../WeaponSelect/WeaponSelect';
import { simulateComputer, computeWinner } from '../../utils';
import style from './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerWins: 0,
      computerWins: 0,
      playerSelection: undefined,
      computerSelection: undefined,
    };
    this.weaponClick = this.weaponClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      playerWins: 0,
      computerWins: 0,
      playerSelection: undefined,
      computerSelection: undefined,
    });
  }

  weaponClick(weapon) {
    const computerSelection = simulateComputer();
    // 1 means first player wins, -1 means second player wins, 0 is tie
    const result = computeWinner(weapon, computerSelection);
    this.setState(({ playerWins, computerWins }) => ({
      playerSelection: weapon,
      computerSelection,
      playerWins: result === 1 ? playerWins + 1 : playerWins,
      computerWins: result === -1 ? computerWins + 1 : computerWins,
    }));
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
          <div
            className={style.reset}
            onClick={this.reset}
          >
            Reset
          </div>
          <Counter name='Computer' wins={computerWins} />
        </div>
        <Battlefield
          firstName='You'
          secondName='Computer'
          firstSelection={playerSelection}
          secondSelection={computerSelection}
        />
        <WeaponSelect onClick={this.weaponClick} />
      </div>
    );
  }
}
