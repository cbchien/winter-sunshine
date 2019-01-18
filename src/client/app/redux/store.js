import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducer';

const loggerMiddleware = createLogger()

// Create a redux store
function configureStore(initialState) {
    // enable redux devtools extension in browser
    const composeEnhancers = window && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
        compose;
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(promiseMiddleware,thunkMiddleware,loggerMiddleware)),
    );

    return store;
}

export default configureStore;
