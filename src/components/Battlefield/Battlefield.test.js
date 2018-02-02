import React from 'react';
import { shallow } from 'enzyme';
import Battlefield from './Battlefield';

test('should render correctly with no props', () => {
  const wrapper = shallow(<Battlefield />);
  expect(wrapper).toMatchSnapshot();
});

test('should render correctly with name and selection props', () => {
  const wrapper = shallow(<Battlefield
    firstName='You'
    firstSelection={0}
    secondSelection={1}
  />);
  expect(wrapper).toMatchSnapshot();
});
