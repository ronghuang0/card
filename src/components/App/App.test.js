import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('Should render correctly initially', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render correctly based on state', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ gameMode: 'simulation' });
  expect(wrapper).toMatchSnapshot();
});
