/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';
import {validateUser} from 'app/api/methods/signupUser';
import * as validationActions from '../actions';
import { navigateToHome, navigateToLogin } from '../../../navigation/NavigationHelpers';

// Our worker Saga that logins the user
export default function* verifyAsync(action) {
    try {
        validationActions.verificationLoader
        const response = yield call(validateUser, action.email, action.code);
        response==="SUCCESS" ? yield call(navigateToLogin):yield validationActions.verificationFailed;
        //mock response
        //yield call(navigateToHome);
    } catch (e) {
        alert("Something went wrong!")
    }
}


