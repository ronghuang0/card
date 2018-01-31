import { makeElement } from '../utils';
// import store from ''
const Rock = (props) => {
  console.log('hi');
  return makeElement(
    'div',
    {
      onclick: () => console.log('props', props.print),
    },
    ['ROCK'],
  );
  store.subscribe()
};


export default Rock;
