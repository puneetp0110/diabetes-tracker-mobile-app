/*
 * Reducer actions related with login
 */
import * as types from './actionTypes';

export function requestSignup(email, password) {
    return {
        type: types.SIGNUP_REQUEST,
        email,
        password
    };
}

export function signupFailed() {
    return {
        type: types.SIGNUP_FAILED
    };
}

export function onSignupResponse(response) {
    return {
        type: types.SIGNUP_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.SIGNUP_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.SIGNUP_DISABLE_LOADER
    };
}

