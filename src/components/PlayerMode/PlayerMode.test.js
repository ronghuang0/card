import React from 'react';
import { shallow } from 'enzyme';
import PlayerMode from './PlayerMode';
import WeaponSelect from '../WeaponSelect/WeaponSelect';

test('should render correctly', () => {
  const wrapper = shallow(<PlayerMode />);
  expect(wrapper).toMatchSnapshot();
});

test('weaponClick should correctly set state', () => {
  const wrapper = shallow(<PlayerMode />);
  wrapper.instance().weaponClick(0);
  expect(wrapper.state().playerSelection).toBe(0);
});

test('reset should correctly reset wins and selections', () => {
  const wrapper = shallow(<PlayerMode />);
  wrapper.instance().weaponClick(0);
  wrapper.instance().weaponClick(1);
  wrapper.instance().reset(0);
  expect(wrapper.state()).toEqual(expect.objectContaining({
    playerWins: 0,
    computerWins: 0,
    playerSelection: undefined,
    computerSelection: undefined,
  }));
});

test('should call weaponClick correctly on weapon select click', () => {
  const wrapper = shallow(<PlayerMode />);
  wrapper.find(WeaponSelect).simulate('click', 0);
  expect(wrapper.state().playerSelection).toBe(0);
});
