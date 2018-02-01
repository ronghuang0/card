import React from 'react';
import Weapon from '../Weapon/Weapon';
import { compare } from '../../utils';
import { numToTextMap } from '../../constants';
import style from './Battlefield.css';

const Battlefield = ({ playerSelection, computerSelection }) => {
  const result = compare(playerSelection, computerSelection);
  return (
    <div className={style.container}>
      <Weapon name={`${numToTextMap[playerSelection]}`} />
      VS
      <Weapon name={`${numToTextMap[computerSelection]}`} />
    </div>
  );
};

export default Battlefield;
