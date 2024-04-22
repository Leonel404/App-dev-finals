import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import Logo from "../images/logonimo.png";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <Col>
          <div>
            <label>Sign in</label>
          </div>
          <div>
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
          <div>
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
          <div>
            <Button label="Submit" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;