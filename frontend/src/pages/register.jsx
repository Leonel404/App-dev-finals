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
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    const userData = {
      firstName,
      lastName,
      email,
      password,
      conpassword,
    };
    axios.post('http://127.0.0.1:8000/api/register',userData)
      .then(response => {
        console.log(response.data)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConpassword('')
        navigate('/login')
      })
      .catch(error=> {
        toast.error(error.message)
      })
    
  };
  return (
    <Container fluid className="vh-100">
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition: Bounce
      />
      <Row className="header-container">
        <Col className="login-header w-100 h-100 d-flex align-items-center">
          <img src={Logo} alt="" className="login-logo" />
          <label className="name">Cloud Cache</label>
        </Col>
      </Row>
      <Row className="vh-100">
        <Col className="w-100  d-flex justify-content-center">
          <div className=" login-container2">
            <div className="w-100 d-flex justify-content-center mb-3">
              <label className="sign-in">Sign <span className="in-up">up</span></label>
            </div>
            <div className="field d-flex df-column mb-4 w-100">
              <FloatLabel>
                <InputText
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label >First Name</label>
              </FloatLabel>
            </div>
            <div className="field d-flex df-column mb-4 w-100">
              <FloatLabel>
                <InputText
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="username">Last Name</label>
              </FloatLabel>
            </div>
            <div className="field d-flex df-column mb-4 w-100">
              <FloatLabel>
                <InputText
                  id="email"
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
            <div className="d-flex justify-content-center w-100 mb-5">
              <Button label="Submit" onClick={handleRegister} className="w-100" />
            </div>
            <div className="acc">
              <label >
                Already have an account?{" "}
                <span className="sign-up"><a onClick={() => navigate("/login")}>Sign in</a></span>
              </label>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default register;
