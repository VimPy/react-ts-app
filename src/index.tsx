import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from './routes';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <App />,
  <Router />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
