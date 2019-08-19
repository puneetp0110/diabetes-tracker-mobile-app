/*
 * Reducer actions related with login
 */
import * as types from './actionTypes';

export function requestShowBloodSugar(email, password) {
    return {
        type: types.SIGNUP_REQUEST,
        email
    };
}

export function showBloodSugarFailed() {
    return {
        type: types.SHOW_BLOOD_SUGAR_FAILED
    };
}

export function onShowBloodSugarResponse(response) {
    return {
        type: types.SHOW_BLOOD_SUGAR_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.SHOW_BLOOD_SUGAR_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.SHOW_BLOOD_SUGAR_DISABLE_LOADER
    };
}

