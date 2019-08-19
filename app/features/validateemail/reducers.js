/* Signup Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from './actionTypes';

const initialState = {
    id: -1,
    email: '',
    password: '',
    code: ""
};

export const verificationReducer = createReducer(initialState, {
    [types.VERIFICATION_REQUEST](state, action) {
        return {
            ...state,
            code: action.code,
        };
    },
    [types.VERIFICATION_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.VERIFICATION_RESPONSE](state, action) {
        return {
            ...state
        };
    },
    [types.VERIFICATION_FAILED](state) {
        return {
            ...state,
        };
    }
});
