/**
 * Redux saga class init
 * There can be multiple sagas
 * Export them as an array
 * Top level sagas in store will take care of combining sagas
 */
import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import showBloodSugarAsync from './showBloodSugarSaga';
export const showBloodSugarSagas = [takeEvery(types.SHOW_BLOOD_SUGAR_REQUEST, showBloodSugarAsync)];
