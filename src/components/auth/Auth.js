import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import RegisterForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import "./Auth.css";

const Auth = ({ setUserName, setEmail, setPassword }) => {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);

  const loginProps = useSpring({
    left: registrationFormStatus ? -600 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 600, // Register form sliding positions 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of register button
  });
  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
    <div className="maincontainer">
      <div className="container">
        <div className="login-register-wrapper">
          <div className="nav-buttons text-center">
            <animated.button
              onClick={loginClicked}
              id="loginBtn"
              style={loginBtnProps}
            >
              Login
            </animated.button>
            <animated.button
              onClick={registerClicked}
              id="registerBtn"
              style={registerBtnProps}
            >
              Register
            </animated.button>
          </div>
          <div className="form-group">
            <animated.form action="" id="loginform" style={loginProps}>
              <LoginForm setUserName={setUserName} setEmail={setEmail} setPassword={setPassword} />
            </animated.form>
            <animated.form action="" id="registerform" style={registerProps}>
              <RegisterForm />
            </animated.form>
          </div>
          <animated.div className="forgot-panel" style={loginProps} />
        </div>
      </div>
    </div>
  );
}

export default Auth;
