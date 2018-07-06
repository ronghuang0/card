import React from 'react';
import ReactDOM from 'react-dom';
import ViewPort from './components/ViewPort/ViewPort';

const Root = () => (
  <ViewPort />
);

const el = document.getElementById('root');
ReactDOM.render(<Root />, el);
