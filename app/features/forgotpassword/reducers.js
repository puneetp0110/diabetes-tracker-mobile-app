/* Signup Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from './actionTypes';

const initialState = {
    email: ''
};

export const forgotPasswordReducer = createReducer(initialState, {
    [types.FORGOT_PASSWORD_REQUEST](state, action) {
        return {
            ...state,
            email: action.email
        };
    },
    [types.FORGOT_PASSWORD_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.FORGOT_PASSWORD_RESPONSE](state, action) {
        return {
            ...state,
            id: action.response.id
        };
    },
    [types.FORGOT_PASSWORD_FAILED](state) {
        return {
            ...state
        };
    }
});
