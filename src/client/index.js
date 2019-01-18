import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import configureStore from './../client/app/redux/store';

import './styles.scss';

const store = configureStore();

const ReactApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

render(<ReactApp />, document.getElementById('app'));