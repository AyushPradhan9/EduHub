import React from 'react';
import { GoogleLogin } from 'react-google-login';

const apiKey = '931480151844-9ltek3qu9jpss2fom32cu2keq3gs6g65.apps.googleusercontent.com';

export default function Login() {
    const onSuccess = (res) => {
        console.log('Login Success: ', res);
    };

    const onFailure = (res) => {
        console.log('Login Failed', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={apiKey}
                buttonText="Log in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}