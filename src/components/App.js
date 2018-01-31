import Rock from './Rock';
import { makeElement } from '../utils';

const App = makeElement('div', {}, [Rock({ print: 'print' })]);

export default App;
