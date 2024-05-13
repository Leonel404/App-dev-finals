import React, { useState, useEffect } from "react";
import "./Login.css";
import Logo from "../images/logonimo.png";
import { useNavigate } from "react-router-dom";
import axiosClient from '../axios-client';
import {
  Container,
  Col,
  Row,
  ToastContainer,
} from "react-bootstrap";
import {FloatLabel} from 'primereact/floatlabel';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';

import { useStateContext } from "../contexts/ContextProvider";

function Login() {
  const {setUser, setToken} = useStateContext({});

  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      email,
      password,
    };
  
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        console.log(data)
      })
      .catch((error) => {
        // Handle error
        console.error("Login failed:", error);
      });
  };

  return (
    <Container fluid className="vh-100">
      <ToastContainer />
      {responseMessage && (
        <AlertMessage type="success" message={responseMessage} />
      )}
      {errorMessage && <AlertMessage type="danger" message={errorMessage} />}

      <Row className="header-container">
        <Col className="login-header w-100 h-100 d-flex align-items-center">
          <img src={Logo} alt="" className="login-logo" />
          <label className="name">Cloud Cache</label>
        </Col>
      </Row>
      <Row className="vh-100">
        <Col className="w-100  d-flex justify-content-center">
          <div className=" login-container">
            <div className="w-100 d-flex justify-content-center mb-5">
              <label className="sign-in">
                Sign <span className="in-up">in</span>
              </label>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="field d-flex df-column mb-4 w-100">
                <FloatLabel>
                  <InputText
                    id="email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="username">Email</label>
                </FloatLabel>
              </div>
              <div className="field d-flex df-column mb-4">
                <FloatLabel>
                  <Password
                    feedback={false}
                    toggleMask
                    tabIndex={1}
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="username">Password</label>
                </FloatLabel>
              </div>
              <div className="d-flex justify-content-center w-100 mb-5">
                <Button label="Submit" className="w-100" />
              </div>
              <div className="acc w-100">
                <label>
                  Don't have an account?{" "}
                  <span className="sign-up">
                    <a onClick={() => navigate("/register")}>Sign up</a>
                  </span>
                </label>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
