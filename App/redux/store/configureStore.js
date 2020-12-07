import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import languageReducer from '../reducers/languageReducer';
const rootReducer = combineReducers(
    { counter:  userReducer,languageReducer }
);
// const rootReducer = () => combineReducers(
//     { count: reducer })

const configureStore = createStore(rootReducer)

export default configureStore;