/*
 * Reducer actions related with login
 */
import * as types from './actionTypes';

export function requestShowHistory(email) {
    return {
        type: types.FORGOT_PASSWORD_REQUEST,
        email
    };
}

export function showHistoryFailed() {
    return {
        type: types.FORGOT_PASSWORD_FAILED
    };
}

export function onShowHistoryResponse(response) {
    return {
        type: types.FORGOT_PASSWORD_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.FORGOT_PASSWORD_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.FORGOT_PASSWORD_DISABLE_LOADER
    };
}

