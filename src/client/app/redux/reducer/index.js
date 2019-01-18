import { combineReducers } from 'redux';

// import reducers to smaller modules base on domain/functions
import skillReducer from './skillReducers';

const rootReducer = combineReducers({
    skill: skillReducer,
});

export default rootReducer;
