import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card/Card';

const Root = () => (
  <Card />
);

const el = document.getElementById('root');
ReactDOM.render(<Root />, el);
