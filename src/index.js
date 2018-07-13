import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { space, accessToken } from './config';

ReactDOM.render(<App space={space} token={accessToken} />, document.getElementById('root'));
registerServiceWorker();
