import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import {Provider} from 'react-redux';
import createStore from "./store";
import 'semantic-ui-css/semantic.min.css';
import './app.css';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));


