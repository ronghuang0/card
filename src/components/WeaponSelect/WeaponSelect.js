import React from 'react';
import Weapon from '../Weapon/Weapon';
import { ROCK, PAPER, SCISSORS } from '../../constants';
import style from './WeaponSelect.css';

const WeaponSelect = ({ onClick }) => (
  <div className={style.container}>
    <div className={style.weapons}>
      <Weapon name='ROCK' onClick={() => onClick(ROCK)} />
      <Weapon name='PAPER' onClick={() => onClick(PAPER)} />
      <Weapon name='SCISSORS' onClick={() => onClick(SCISSORS)} />
    </div>
    <div> Choose Weapon </div>
  </div>
);

export default WeaponSelect;
