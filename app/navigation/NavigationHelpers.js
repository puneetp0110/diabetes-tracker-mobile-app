/*
 * Actions related with navigation
 * Every navigation action should be defined here
 * Avoid using this.props.navigation inside the code
 */
import NavigationService from './NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('Home', params);
}

export function navigateToSignup(params) {
    NavigationService.navigate('Signup',params)
}

export function navigateToValidateEmail(response) {
    NavigationService.navigate('ValidateEmail', {
        response: response
    })
}

export function navigateToLogin(params) {
    NavigationService.navigate('Login', params)
}