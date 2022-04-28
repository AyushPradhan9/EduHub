import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const apiKey = '99605690667-e3rljsmlvbii2bjofju53s5vqtfd6nc7.apps.googleusercontent.com';

const Login = ({ setUserName, setEmail, setPassword }) => {
    const history = useHistory();

    const onSuccess = (response) => {
        const regUser = {
            name: response.profileObj.name,
            email: response.profileObj.email,
            password: "fnkj@#14n1513#23@#$"
        }
        const signUser = {
            email: response.profileObj.email,
            password: "fnkj@#14n1513#23@#$"
        }
        axios.post("http://localhost:9002/register", regUser)
            .then(res => {
                const message = res.data.message;
                if (message === "Successfully Registered" || message === "Email already registered") {
                    axios.post("http://localhost:9002/login", signUser)
                        .then(res => {
                            const message = res.data.message;
                            const userData = res.data.user;
                            if (message === "Login Successful") {
                                if (userData) {
                                    setUserName(userData.name);
                                    setEmail(userData.email);
                                    setPassword(userData.password);
                                }
                                Swal.fire({
                                    icon: 'success',
                                    text: message,
                                    imageWidth: 100,
                                    imageHeight: 100,
                                    width: 350,
                                    showConfirmButton: false,
                                    showCloseButton: true,
                                    timer: 2000
                                });
                            }
                            else {
                                Swal.fire({
                                    icon: 'error',
                                    text: message,
                                    imageWidth: 100,
                                    imageHeight: 100,
                                    width: 350,
                                    showConfirmButton: false,
                                    showCloseButton: true,
                                    timer: 2000
                                });
                            }
                            history.push("/");
                        })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        text: message,
                        imageWidth: 100,
                        imageHeight: 100,
                        width: 350,
                        showConfirmButton: false,
                        showCloseButton: true,
                        timer: 2000
                    });
                }
            })
    }

    const onFailure = (response) => {
    };

    return (
        <div className='m-auto'>
            <GoogleLogin
                clientId={apiKey}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login;