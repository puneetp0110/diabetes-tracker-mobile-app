/**
 * Redux saga class init
 * There can be multiple sagas
 * Export them as an array
 * Top level sagas in store will take care of combining sagas
 */
import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import loginSaga from './loginSaga';
export const loginSagas = [takeEvery(types.LOGIN_REQUEST, loginSaga)];

//export const signupSagas = [takeEvery(types.SIGN_UP, signup)];