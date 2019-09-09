/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';
import loginUser from 'app/api/methods/loginUser';
import * as loginActions from '../actions';
import { navigateToHome, navigateToSignup } from '../../../navigation/NavigationHelpers';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
    yield put(loginActions.enableLoader());
    //how to call api
    try {
        const response = yield call(loginUser, action.email, action.password);
        //mock response
        yield put(loginActions.onLoginResponse(response.data));
        response.success ? yield call(navigateToHome):null;
    } catch (e) {
        yield put(loginActions.loginFailed());
        yield put(loginActions.disableLoader({}));
    }
}


