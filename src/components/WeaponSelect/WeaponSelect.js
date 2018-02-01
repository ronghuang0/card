import React from 'react';
import Weapon from '../Weapon/Weapon';
import { ROCK, PAPER, SCISSORS } from '../../constants';
import style from './WeaponSelect.css';

const WeaponSelect = ({ onClick }) => (
  <div className={style.weaponSelect}>
    <Weapon name='ROCK' onClick={() => onClick(ROCK)} />
    <Weapon name='PAPER' onClick={() => onClick(PAPER)} />
    <Weapon name='SCISSORS' onClick={() => onClick(SCISSORS)} />
  </div>

);

export default WeaponSelect;
