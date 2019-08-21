/*
 * Reducer actions related with login
 */
import * as types from './actionTypes';

export function requestLogin(email, password) {
    return {
        type: types.LOGIN_REQUEST,
        email,
        password
    };
}

export function requestForgottenPassword(email, password) {
    return {
        type: types.FORGOTTEN_PASSWORD_REQUEST,
        email
    };
}

export function loginFailed() {
    return {
        type: types.LOGIN_FAILED
    };
}

export function forgottenPasswordFailed() {
    return {
        type: types.FORGOTTEN_PASSWORD_FAILED
    };
}

export function onForgottenPasswordResponse(response) {
    return {
        type: types.FORGOTTEN_PASSWORD_RESPONSE,
        response
    };
}

export function onLoginResponse(response) {
    return {
        type: types.LOGIN_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}

