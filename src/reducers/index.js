import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import contactReducer from './contactReducer';


const rootReducer = combineReducers({
    routing: routerReducer,
    firebase: firebaseStateReducer,
    form: formReducer,
    contact: contactReducer

});

export default rootReducer;
