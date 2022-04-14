import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
// import GoogleLogin from "./Google/Login";
// import MetaLogin from "./Facebook/Login";
// import { GoogleLoginButton, FacebookLoginButton, GithubLoginButton, LinkedInLoginButton } from "react-social-login-buttons";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logo from "../../assets/EduhubLogo1.png";
import Swal from "sweetalert2";

const LoginForm = ({ setUserName, setEmail, setPassword }) => {
    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value

        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                const message = res.data.message;
                const userData = res.data.user;
                if (userData) {
                    setUserName(userData.name);
                    setEmail(userData.email);
                    setPassword(userData.password);
                }
                if (message === "Login Successful") {
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

    return (
        <React.Fragment>
            <Container>
                <Col>
                    <Row>
                        <img src={logo} alt="Eduhub" className="authLogo" />
                    </Row>
                    <Row>
                        <input type="email" name="email" value={user.email ? user.email : ""}
                            onChange={handleChange} placeholder="&#xf0e0;  E-mail" />
                    </Row>
                    <Row>
                        <input type="password" name="password" value={user.password}
                            onChange={handleChange} placeholder="&#xf023;  Password" />
                    </Row>
                    <Row className="m-auto w-100">
                        <Button onClick={login} className="submit" id="formSubmit">Login</Button>
                    </Row>
                </Col>
                {/* <Row>
                    <Col xs={6}>
                        <GoogleLogin />
                    </Col>
                    <Col xs={6}>
                        <MetaLogin />
                    </Col>
                    <Col xs={6}>
                        <GithubLoginButton />
                    </Col>
                    <Col xs={6}>
                        <LinkedInLoginButton />
                    </Col>
                </Row> */}
            </Container>
        </React.Fragment>
    );
}
export default LoginForm;