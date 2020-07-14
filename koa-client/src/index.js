import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import CreatedStore from 'redux/configureStore';

const store = CreatedStore;


ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
serviceWorker.unregister();
