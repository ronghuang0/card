import React from 'react';
import Weapon from '../Weapon/Weapon';
import { compare } from '../../utils';
import { numToWeaponMap, numToResultMap } from '../../constants';
import style from './Battlefield.css';

const Battlefield = ({
  firstName,
  secondName,
  firstSelection,
  secondSelection
}) => {
  const winner = compare(firstSelection, secondSelection);
  const result = `${firstName} ${numToResultMap[winner]}`;
  return (
    <div className={style.bigContainer} >
      <div>
        { result }
      </div>
      <div className={style.container}>
        <Weapon name={`${numToWeaponMap[firstSelection]}`} />
        VS
        <Weapon name={`${numToWeaponMap[secondSelection]}`} />
      </div>
      <div>
        rock beats child
      </div>
    </div>
  );
};

export default Battlefield;
