import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter';
import Battlefield from '../Battlefield/Battlefield';
import { simulateComputer, computeWinner } from '../../utils';
import style from './SimulationMode.css';

export default class SimulationMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstWins: 0,
      secondWins: 0,
      firstSelection: undefined,
      secondSelection: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => this.simulateGame(), 1000);
  }

  componentWillUpdate() {
    setTimeout(() => this.simulateGame(), 1000);
  }

  simulateGame() {
    const firstSelection = simulateComputer();
    const secondSelection = simulateComputer();
    const result = computeWinner(firstSelection, secondSelection);
    this.setState(({ firstWins, secondWins }) => ({
      firstSelection,
      secondSelection,
      firstWins: result === 1 ? firstWins + 1 : firstWins,
      secondWins: result === -1 ? secondWins + 1 : secondWins,
    }));
  }

  render() {
    const {
      firstWins,
      secondWins,
      firstSelection,
      secondSelection,
    } = this.state;
    const { onToggle } = this.props;

    return (
      <div>
        <div className={style.counterContainer}>
          <Counter name='Cpu 1' wins={firstWins} />
          <div
            className={style.reset}
            onClick={onToggle}
          >
            Player Mode
          </div>
          <Counter name='Cpu 2' wins={secondWins} />
        </div>
        <Battlefield
          firstName='Cpu 1'
          secondName='Cpu 2'
          firstSelection={firstSelection}
          secondSelection={secondSelection}
        />
      </div>
    );
  }
}

SimulationMode.propTypes = {
  onToggle: PropTypes.func,
};
