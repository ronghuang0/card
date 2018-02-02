import React from 'react';
import PropTypes from 'prop-types';
import style from './Counter.css';

const ComputerCounter = ({ name, wins }) => (
  <div className={style.counter}>
    <div className={style.name}>{name}</div>
    <div className={style.wins}>{ wins }</div>
  </div>
);

ComputerCounter.propTypes = {
  name: PropTypes.string,
  wins: PropTypes.number,
};

export default ComputerCounter;
