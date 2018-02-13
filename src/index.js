import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const classroom = [
  'Ashley', 'Bishal', 'Brent',
  'Brian', 'Caelin', 'Eddie',
  'Frederick', 'Joe', 'Judah',
  'Matt', 'Melissa', 'Nigel',
  'Olivia', 'Patrick', 'Rob',
  'Ross', 'Scott', 'Sean',
  'Stephanie', 'Tim', 'Tracey'];


ReactDOM.render(<App classroom={classroom}/>, document.getElementById('root'));
registerServiceWorker();
