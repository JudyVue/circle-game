import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//redux stuff
// import reducers from './reducers';

// import { createStore, applyMiddleware } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
