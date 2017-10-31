import {
    MODIFY_CONTACT
} from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function contactReducer(state = initialState.contact, action) {
    switch (action.type) {
        case MODIFY_CONTACT:
                return {
                  ...state,
                  contact: action.contact
                };
        default:
            return state;
    }
}
