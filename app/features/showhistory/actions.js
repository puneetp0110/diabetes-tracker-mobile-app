/*
 * Reducer actions related with login
 */
import * as types from './actionTypes';

export function requestShowHistory(email) {
    return {
        type: types.SHOW_HISTORY_REQUEST,
        email
    };
}

export function showHistoryFailed() {
    return {
        type: types.SHOW_HISTORY_FAILED
    };
}

export function onShowHistoryResponse(response) {
    return {
        type: types.SHOW_HISTORY_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.SHOW_HISTORY_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.SHOW_HISTORY_DISABLE_LOADER
    };
}

