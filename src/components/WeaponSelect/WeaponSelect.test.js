import React from 'react';
import { shallow } from 'enzyme';
import WeaponSelect from './WeaponSelect';
import Weapon from '../Weapon/Weapon';

test('should render correctly', () => {
  const wrapper = shallow(<WeaponSelect />);
  expect(wrapper).toMatchSnapshot();
});

test('should call onClick', () => {
  const click = jest.fn();
  const wrapper = shallow(<WeaponSelect onClick={click} />);
  wrapper.find(Weapon).at(0).simulate('click');
  expect(click.mock.calls[0][0]).toBe(0);
});
