import React, { useState } from "react";
import * as Components from "./Components";
import "./LoginPage.css";
import Validation from './LoginValidation.js';
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const clientId = "64853150142-qghlcri9mp8cbjn4j0gb1djis6belqh0.apps.googleusercontent.com";

function LoginPage() {
  const [signIn, setSignIn] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSuccess = (res) => {
    console.log("Login Success ! Current User :", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login Failed ! res:", res);
  };

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(signIn));
    if (error.email === "" && error.password === "") {
      axios.post('http://localhost:8086/login', signIn)
        .then(res => {
          if (res.data.success) {
            navigate('/', { replace: true });
            alert("Login successful!");
          } else {
            alert("No Data Existed");
          }
        })
        .catch(err => console.error('Error submitting form:', err));
    } else {
      console.log('Form contains validation errors. Please correct them.');
    }
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setSignIn(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="log">
      <Components.Container>
        <Components.SignUpContainer signIn={signIn}>
          <Components.Form onSubmit={handleSubmit}>
            <Components.Title>Log In</Components.Title>

            <div>
              <Components.Input onChange={handleInput} name="name" type="text" placeholder="Name" />
              {error.name && <span className="text-danger">{error.name}</span>}
            </div>

            <div>
              <Components.Input onChange={handleInput} name="email" type="email" placeholder="Email" />
              {error.email && <span className="text-danger">{error.email}</span>}
            </div>

            <div>
              <Components.Input onChange={handleInput} name="password" type="password" placeholder="Password" />
              {error.password && <span className="text-danger">{error.password}</span>}
            </div>

            <Components.Button>Sign in</Components.Button>

            <div className="google-login-container">
              <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            </div>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button as={Link} to="/getru">Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signIn={signIn}>
          <Components.Overlay signIn={signIn}>

            <div className="leftone">
              <Components.LeftOverlayPanel  signIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => setSignIn(true)}>
                  <div>
                    <Link to="/sig">Register</Link>
                  </div>
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter Your personal details and start journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => setSignIn(false)}>
                  Sign In
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </div>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default LoginPage;
