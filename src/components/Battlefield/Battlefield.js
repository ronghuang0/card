import React from 'react';
import Weapon from '../Weapon/Weapon';
import { compare } from '../../utils';
import { numToWeaponMap, numToResultMap, map } from '../../constants';
import style from './Battlefield.css';

const Battlefield = ({
  firstName,
  secondName,
  firstSelection,
  secondSelection,
}) => {
  let winner = '';
  let result = '';
  let result2 = '';
  let name1 = 'questionmark';
  let name2 = 'questionmark';
  if (firstName !== undefined &&
    firstSelection !== undefined &&
    secondSelection !== undefined) {
    winner = compare(firstSelection, secondSelection);
    result = `${firstName} ${numToResultMap[winner]}`;
    result2 = firstSelection !== undefined ? map[firstSelection][secondSelection] : null;
    name1 = `${numToWeaponMap[firstSelection]}`;
    name2 = `${numToWeaponMap[secondSelection]}`;
  }
  return (
    <div className={style.bigContainer} >
      <div className={style.div1}>
        {result}
      </div>
      <div className={style.container}>
        <Weapon name={name1} />
        VS
        <Weapon name={name2} />
      </div>
      <div className={style.div2}>
        {result2}
      </div>
    </div>
  );
};

export default Battlefield;
