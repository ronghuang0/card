import React from 'react';

const Weapon = ({ name, onClick }) => (
  <div onClick={onClick}>
    {name}
  </div>
);

export default Weapon;
