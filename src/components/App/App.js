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
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.stage === 'midcycle' && this.state.stage === 'result') {
  //     return false;
  //   }
  //   return true;
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.stage === 'startcycle' || this.state.stage === 'midcycle') {
  //     setTimeout(() => {
  //       this.setState({
  //         computerSelection: (prevState.computerSelection + 1) % 3,
  //         stage: 'midcycle',
  //       });
  //     }, 300);
  //   }
  // }

  weaponClick(weapon) {
    const computerSelection = simulateComputer();
    // 1 means first player wins, -1 means second player wins, 0 is tie
    const result = compare(weapon, computerSelection);
    // setTimeout(() => {
    //   this.setState(({ playerWins, computerWins }) => ({
    //     stage: 'result',
    //     computerSelection,
    //     playerWins: result === 1 ? playerWins + 1 : playerWins,
    //     computerWins: result === -1 ? computerWins + 1 : computerWins,
    //   }));
    // }, 3000);
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
