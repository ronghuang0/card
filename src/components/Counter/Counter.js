import React from 'react';
import style from './Counter.css';

const ComputerCounter = ({ name, wins }) => (
  <div className={style.counter}>
    <div className={style.name}>{name}</div>
    <div className={style.wins}>{ wins }</div>
  </div>
);

export default ComputerCounter;
