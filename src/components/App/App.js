import React, { Component } from 'react';
import PlayerMode from '../PlayerMode/PlayerMode';
import SimulationMode from '../SimulationMode/SimulationMode';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: 'player',
    };
    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    const { gameMode } = this.state;
    this.setState({
      gameMode: gameMode === 'player' ? 'simulation' : 'player',
    });
  }

  render() {
    const { gameMode } = this.state;
    return (
      gameMode === 'player' ? <PlayerMode toggleMode={this.toggleMode} /> :
      <SimulationMode toggleMode={this.toggleMode} />
    );
  }
}
