import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './components/Stage';

const Root = () => (
  <Stage />
);

const el = document.getElementById('root');
ReactDOM.render(<Root />, el);
