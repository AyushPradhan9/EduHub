import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

function App() {

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

    const responseFacebook = (response) => {
        console.log("here");
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    return (
        <div>
            {!login &&
                <FacebookLogin
                    appId="921201001964201"
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="public_profile,user_friends"
                    callback={responseFacebook}
                    icon="fa-facebook" />
            }
        </div>
    );
}

export default App;