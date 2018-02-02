import React from 'react';
import Weapon from '../Weapon/Weapon';
import { computeWinner } from '../../utils';
import { numToWeaponMap, numToResultMap, numToDetailResultMap } from '../../constants';
import style from './Battlefield.css';

// This is the default battlefield for player vs computer
const Battlefield = ({
  firstName,
  firstSelection,
  secondSelection,
}) => {
  let winner = '';
  let result = '';
  let detailedResult = '';
  let firstWeapon = 'questionmark';
  let secondWeapon = 'questionmark';
  if (firstName !== undefined &&
      firstSelection !== undefined &&
      secondSelection !== undefined) {
    winner = computeWinner(firstSelection, secondSelection);
    result = `${firstName} ${numToResultMap[winner]}`;
    detailedResult = firstSelection !== undefined ?
      numToDetailResultMap[firstSelection][secondSelection] : null;
    firstWeapon = `${numToWeaponMap[firstSelection]}`;
    secondWeapon = `${numToWeaponMap[secondSelection]}`;
  }
  return (
    <div className={style.outerContainer} >
      <div className={style.resultDiv}>
        {result}
      </div>
      <div className={style.innerContainer}>
        <Weapon name={firstWeapon} />
        VS
        <Weapon name={secondWeapon} />
      </div>
      <div className={style.resultDiv}>
        {detailedResult}
      </div>
    </div>
  );
};

export default Battlefield;
