/* Signup Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from './actionTypes';

const initialState = {
    email: ''
};

export const showHistoryReducer = createReducer(initialState, {
    [types.SHOW_HISTORY_REQUEST](state, action) {
        return {
            ...state,
            email: action.email
        };
    },
    [types.SHOW_HISTORY_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.SHOW_HISTORY_RESPONSE](state, action) {
        return {
            ...state,
            id: action.response.id
        };
    },
    [types.SHOW_HISTORY_FAILED](state) {
        return {
            ...state
        };
    }
});
