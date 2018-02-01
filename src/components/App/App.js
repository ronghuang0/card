/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import Battlefield from '../Battlefield/Battlefield';
import WeaponSelect from '../WeaponSelect/WeaponSelect';
import { simulateComputer, compare } from '../../utils';
import style from './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerWins: 0,
      computerWins: 0,
      computerSelection: 0,
    };
    this.weaponClick = this.weaponClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.stage === 'cycle') {
      setTimeout(() => {
        console.log('woley', prevState.computerSelection);
        this.setState({ computerSelection: (prevState.computerSelection + 1) % 3 });
      }, 100);
    }
  }

  weaponClick(weapon) {
    const computerSelection = simulateComputer();
    // 1 means first argument wins, -1 means second argument wins, 0 is tie
    const winner = compare(weapon, computerSelection);
    setTimeout(() => {
      this.setState(({ playerWins, computerWins }) => ({
        stage: 'result',
        computerSelection,
        playerWins: winner === 1 ? playerWins + 1 : playerWins,
        computerWins: winner === -1 ? computerWins + 1 : computerWins,
      }));
    }, 3000);
    this.setState({
      playerSelection: weapon,
      computerSelection: 0,
      stage: 'cycle',
    });
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
        <WeaponSelect onClick={this.weaponClick} />
      </div>
    );
  }
}
