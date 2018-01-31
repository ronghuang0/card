import { makeElement } from '../utils';

const Rock = makeElement(
  'div',
  {
    onclick: () => console.log('woley'),
  },
  ['ROCK'],
);

export default Rock;
