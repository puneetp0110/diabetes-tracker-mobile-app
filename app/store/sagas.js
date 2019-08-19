/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */
import { all } from 'redux-saga/effects';
import { loginSagas } from 'app/features/login/sagas';
import { signupSagas } from '../features/signup/sagas';
import { validationSagas } from '../features/validateemail/sagas';
import { showBloodSugarSagas } from 'app/features/showbloodsugar/sagas';
import { showHistorySagas } from 'app/features/showhistory/sagas';
// export default [loginSaga];

export default function* rootSaga() {
    yield all([...loginSagas, ...signupSagas,...validationSagas,...showBloodSugarSagas,...showHistorySagas]);
}
