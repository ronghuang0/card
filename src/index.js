import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const Root = () => (
  <App />
);

const el = document.getElementById('root');
ReactDOM.render(<Root />, el);
