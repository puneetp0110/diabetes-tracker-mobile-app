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
const signupUser = function (email, password){
    return Auth.signUp({
            username: email,
            password: password,
            attributes: {
                email
            }
            })
            .then((response) => {
                console.log(JSON.stringify(response)) 
                return { success: true, data: { id: 1 }, response: response };
            })
            .catch((err)=>{
                alert(err.message)
                return { success: false, data: { id: -1 } }});
}

const validateUser = function (code,email){
    return Auth.confirmSignUp(email, code, { 
    }).then((data)=>{return data})
      .catch(err => console.log(err));
}
    // API.get("BloodSugar", `prod/diabetesTracker/${email}`).then((response) => {
    //     console.log(JSON.stringify(response));
    // })

export {signupUser,validateUser}