import React from 'react';
import { shallow } from 'enzyme';
import Weapon from './Weapon';

test('should render correctly', () => {
  const click = jest.fn();
  const wrapper = shallow(<Weapon
    name='rock'
    onClick={click}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should call onClick', () => {
  const click = jest.fn();
  const wrapper = shallow(<Weapon
    name='rock'
    onClick={click}
  />);
  wrapper.find('div').simulate('click');
  expect(click.mock.calls.length).toBe(1);
});
