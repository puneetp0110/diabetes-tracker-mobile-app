/* Redux saga class
 * un - username
 */
import { put, call } from 'redux-saga/effects';
import forgottenPassword from 'app/api/methods/loginUser';
import * as loginActions from '../actions';
import { navigateToHome, navigateToSignup } from '../../../navigation/NavigationHelpers';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
    yield put(loginActions.enableLoader());
    //how to call api
    try {
        const response = yield call(forgottenPassword, action.email);
        //mock response
        yield put(loginActions.onForgottenPasswordResponse(response.data));
    } catch (e) {
        yield put(loginActions.fogottenPasswordFailed());
        yield put(loginActions.disableLoader({}));
    }
}


