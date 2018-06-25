import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App/App';
import Card from './components/Card';

const Root = () => (
  <Card />
);

const el = document.getElementById('root');
ReactDOM.render(<Root />, el);
