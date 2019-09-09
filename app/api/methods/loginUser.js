import Amplify, { Auth, API } from "aws-amplify";
// import { navigateToHome } from 'app/navigation/NavigationHelpers';

Amplify.configure({
    Auth: {

        identityPoolId: 'us-east-1:139f9494-bace-4c7e-9ebb-4a44b6db06b6',

        region: 'us-east-1',

        userPoolId: 'us-east-1_HxySkakCG',

        userPoolWebClientId: '6trbnh8259eeteo6rto3j1k58p',
    },
    API: {
        endpoints: [
            {
                name: 'BloodSugar',
                endpoint: 'https://yzx2uzulb0.execute-api.us-east-1.amazonaws.com/',
                region: 'us-east-1'
            }
        ]
    }

});
export default (email, password) => {
    return Auth.signIn(email, password).then((response) => {
        return { success: true, data: { id: 1 } };
    }).catch(err => {
       if (err.code == "NotAuthorizedException") {
           alert("Incorrect Password. Please provide valid password");
       } else {
           if (err.message) { 
               alert(err.message)
           } else {
               alert("Network Error");
           }
       }
   });
    // API.get("BloodSugar", `prod/diabetesTracker/${email}`).then((response) => {
    //     console.log(JSON.stringify(response));
    // })
}

export function forgottenPassword(email){
    return Auth.forgotPassword(email)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}