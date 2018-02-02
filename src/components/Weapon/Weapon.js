import React from 'react';
import PropTypes from 'prop-types';
import style from './Weapon.css';

const Weapon = ({ name, onClick }) => (
  <div onClick={onClick}>
    <img className={style.weapon} src={`/static/images/${name}.png`} alt={name} />
  </div>
);

Weapon.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Weapon;
