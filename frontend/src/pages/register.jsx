import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import Logo from "../images/logonimo.png";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
function register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
  };
  return (
    <Container fluid className="vh-100">
      <Row className="header-container">
        <Col className="login-header w-100 h-100 d-flex align-items-center">
          <img src={Logo} alt="" className="login-logo" />
          <label className="name">Cloud Cache</label>
        </Col>
      </Row>
      <Row className="vh-100">
        <Col className="w-100  d-flex justify-content-center">
          <div className=" login-container">
            <div className="w-100 d-flex justify-content-center mb-3">
              <label className="sign-in">Sign in</label>
            </div>
            <div className="field d-flex df-column mb-4 w-100">
              <FloatLabel>
                <InputText
                  id="email"
                  value={email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="username">Password</label>
              </FloatLabel>
            </div>
            <div className="field d-flex df-column mb-4">
              <FloatLabel>
                <Password
                  feedback={false}
                  toggleMask
                  tabIndex={1}
                  value={conpassword}
                  onChange={(e) => setConpassword(e.target.value)}
                />
                <label htmlFor="username">Confirm Password</label>
              </FloatLabel>
            </div>
            <div className="w-100 mb-5">
              <Button label="Submit" onClick={handleLogin} className="w-100" />
            </div>
            <div>
              <label>
                Don't have an account?{" "}
                <a onClick={() => navigate("/register")}>Sign up</a>
              </label>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default register;
