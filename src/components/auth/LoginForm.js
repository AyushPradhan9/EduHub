import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logo from "../../assets/EduhubLogo1.png";
import GoogleLogin from "./Google/Login";
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
        if (user.email === "" || user.password === "") {
            Swal.fire({
                icon: 'error',
                text: "Please fill all fields",
                imageWidth: 100,
                imageHeight: 100,
                width: 350,
                showConfirmButton: false,
                showCloseButton: true,
                timer: 2000
            });
        }
        else if (!user.email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            Swal.fire({
                icon: 'error',
                text: "Invalid Email",
                imageWidth: 100,
                imageHeight: 100,
                width: 350,
                showConfirmButton: false,
                showCloseButton: true,
                timer: 2000
            });
        }
        else {
            axios.post("http://localhost:9002/login", user)
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
                    <Row>
                        <GoogleLogin setUserName={setUserName} setEmail={setEmail} setPassword={setPassword} />
                    </Row>
                </Col>
            </Container>
        </React.Fragment>
    );
}
export default LoginForm;