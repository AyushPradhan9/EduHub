import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import logo from "../../assets/EduhubLogo1.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function RegisterForm() {
    const history = useHistory();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user;
        if (name === "" || email === "" || password === "" || reEnterPassword === "") {
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
        else if (!email
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
        else if (password !== reEnterPassword) {
            Swal.fire({
                icon: 'error',
                text: "Re-Entered password doesn't match",
                imageWidth: 100,
                imageHeight: 100,
                width: 350,
                showConfirmButton: false,
                showCloseButton: true,
                timer: 2000
            });
        }
        else if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    const message = res.data.message;
                    if (message === "Successfully Registered") {
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
        } else {
            Swal.fire({
                icon: 'error',
                text: "Invalid Input",
                imageWidth: 100,
                imageHeight: 100,
                width: 350,
                showConfirmButton: false,
                showCloseButton: true,
                timer: 2000
            });
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
                        <input type="text" name="name" value={user.name}
                            onChange={handleChange} maxLength="50" placeholder="&#xf007;  Full Name" />
                    </Row>
                    <Row>
                        <input type="email" name="email" value={user.email}
                            onChange={handleChange} maxLength="50" placeholder="&#xf0e0;  E-mail" />
                    </Row>
                    <Row>
                        <input type="password" name="password" value={user.password}
                            onChange={handleChange} maxLength="50" placeholder="&#xf023;  Password" />
                    </Row>
                    <Row>
                        <input type="password" name="reEnterPassword" value={user.reEnterPassword}
                            onChange={handleChange} maxLength="50" placeholder="&#xf023;  Re-enter Password" />
                    </Row>
                    <Row className="m-auto">
                        <Button onClick={register} className="submit" id="formSubmit">SignUp</Button>
                    </Row>
                </Col>
            </Container>
        </React.Fragment>
    );
}