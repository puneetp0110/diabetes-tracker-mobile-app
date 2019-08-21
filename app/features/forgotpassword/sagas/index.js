/**
 * Redux saga class init
 * There can be multiple sagas
 * Export them as an array
 * Top level sagas in store will take care of combining sagas
 */
import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import showHistoryAsync from './showHistorySaga';
export const showHistorySagas = [takeEvery(types.SHOW_HISTORY_REQUEST, showHistoryAsync)];

//export const signupSagas = [takeEvery(types.SIGN_UP, signup)];