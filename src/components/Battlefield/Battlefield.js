import React from 'react';
import { compare } from '../../utils';
import { numToTextMap } from '../../constants';
import style from './Battlefield.css';

const CurrentResult = ({ playerSelection, computerSelection }) => {
  const result = compare(playerSelection, computerSelection);
  return (
    <div>
      <img className={style.weapon} src='/static/rock.png' alt='Rock' />
      { `${numToTextMap[playerSelection]} ${result} ${numToTextMap[computerSelection]}`}
    </div>
  );
};

export default CurrentResult;
