import React from 'react';
import { GoogleLogin } from 'react-google-login';

const apiKey = '99605690667-vigqrj607h90ohjkt6i1dfjab90ptc7h.apps.googleusercontent.com';

export default function Logout() {
    const onSuccess = (res) => {
        console.log('Login Success');
    };

    return (
        <div>
            <GoogleLogin
                clientId={apiKey}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}