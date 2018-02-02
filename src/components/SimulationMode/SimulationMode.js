import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import Battlefield from '../Battlefield/Battlefield';
import WeaponSelect from '../WeaponSelect/WeaponSelect';
import { simulateComputer, computeWinner } from '../../utils';
import style from './SimulationMode.css';

export default class SimulationMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerWins: 0,
      computerWins: 0,
      playerSelection: undefined,
      computerSelection: undefined,
    };
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

  render() {
    const {
      playerWins,
      computerWins,
      playerSelection,
      computerSelection,
    } = this.state;
    const { toggleMode } = this.props;

    return (
      <div>
        <div className={style.counterContainer}>
          <Counter name='Cpu 1' wins={playerWins} />
          <div
            className={style.reset}
            onClick={this.reset}
          >
            Reset
          </div>
          <div
            className={style.reset}
            onClick={toggleMode}
          >
            Player Mode
          </div>
          <Counter name='Cpu 2' wins={computerWins} />
        </div>
        <Battlefield
          firstName='Cpu 1'
          secondName='Cpu 2'
          firstSelection={playerSelection}
          secondSelection={computerSelection}
        />
      </div>
    );
  }
}
