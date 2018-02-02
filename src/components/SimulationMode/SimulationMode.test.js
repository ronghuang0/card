import React from 'react';
import { shallow } from 'enzyme';
import SimulationMode from './SimulationMode';

test('should render correctly', () => {
  const wrapper = shallow(<SimulationMode />);
  expect(wrapper).toMatchSnapshot();
});
