/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';
import {signupUser} from 'app/api/methods/signupUser';
import * as signupActions from '../actions';
import { navigateToValidateEmail } from '../../../navigation/NavigationHelpers';


// Our worker Saga that logins the user
export default function* signupAsync(action) {
    yield put(signupActions.enableLoader());
    try {
        const response = yield call(signupUser, action.email, action.password);
        //mock response
        response.success ? yield put(signupActions.onSignupResponse(response)):yield put(signupActions.signupFailed());;
        response.success ? yield call(navigateToValidateEmail,response.response):null
        //yield call(navigateToHome);
    } catch (e) {
        yield put(signupActions.signupFailed());
        yield put(signupActions.disableLoader({}));
    }
}


