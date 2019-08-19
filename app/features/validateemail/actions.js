/*
 * Reducer actions related with login
 */
import * as types from './actionTypes';

export function disableLoader() {
    return {
        type: types.VERIFICATION_DISABLE_LOADER
    };
}

export function verificationFailed() {
    return {
        type: types.VERIFICATION_FAILED
    };
}

export function verificationResponse(response) {
    return {
        type: types.VERIFICATION_RESPONSE,
        response
    };
}

export function verificationLoader() {
    return {
        type: types.VERIFICATION_ENABLE_LOADER
    };
}

export function requestVerification(email, code) {
    return {
        type: types.VERIFICATION_REQUEST,
        email,
        code
    };
}