import React, { useState } from "react";
import * as Components from "./Components";
import "./LoginPage.css";
import Validation from './LoginValidation.js'; // Import the validation function
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginPage() {
  const [signIn, setSignIn] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(signIn));
    // Redirect to home page on successful login
    if (error.email === "" && error.password === "") {
      axios.post('http://localhost:8086/login', signIn)
        .then(res => {
          if(res.data.success){
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
            <Components.Button as={Link} to="/getru">Sign In</Components.Button> {/* Use Link to navigate */}
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signIn={signIn}>
          <Components.Overlay signIn={signIn}>
            <Components.LeftOverlayPanel signIn={signIn}>
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
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default LoginPage;
