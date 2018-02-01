import React from 'react';
import style from './Weapon.css';

const Weapon = ({ name, onClick }) => (
  <div onClick={onClick}>
    <img className={style.weapon} src={`/static/${name}.png`} alt={name} />
  </div>
);

export default Weapon;
