import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

test('should render correctly with props', () => {
  const wrapper = shallow(<Counter
    name='You'
    wins={10}
  />);
  expect(wrapper).toMatchSnapshot();
});
