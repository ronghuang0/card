import React, { Component } from 'react';
import Rock from './Rock';
import Paper from './Paper';
import Scissors from './Scissors';

export default class App extends Component {
  state = {

  };
  render() {
    return (
      <div>
        <Rock />
        <Paper />
        <Scissors />
      </div>
    );
  }
}
