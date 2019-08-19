/* Signup Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from './actionTypes';

const initialState = {
    verificationCodeSent:false,
    id: -1,
    email: '',
    password: '',
    code: ""
};

export const signupReducer = createReducer(initialState, {
    [types.SIGNUP_REQUEST](state, action) {
        return {
            ...state,
            email: action.email,
            password: action.password
        };
    },
    [types.SIGNUP_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.SIGNUP_RESPONSE](state, action) {
        return {
            ...state,
            id: action.response.id,
            verificationCodeSent:true
        };
    },
    [types.SIGNUP_FAILED](state) {
        return {
            ...state,
            verificationCodeSent:false
        };
    }
});
