/* Signup Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from './actionTypes';

const initialState = {
    id: -1,
    email: '',
};

export const showBloodSugarReducer = createReducer(initialState, {
    [types.SHOW_BLOOD_SUGAR_REQUEST](state, action) {
        return {
            ...state,
            email: action.email
        };
    },
    [types.SHOW_BLOOD_SUGAR_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.SHOW_BLOOD_SUGAR_RESPONSE](state, action) {
        return {
            ...state,
            response: action.response
        };
    },
    [types.SHOW_BLOOD_SUGAR_FAILED](state) {
        return {
            ...state,
        };
    }
});
