import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import Logo from "../images/logonimo.png";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import AlertMessage from '../components/AlertMessage';
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'
import axiosClient from '../axios-client';


function register() {
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);;

    const [firstNameError, setfirstNameError] = useState(false);
    const [lastNameError, setlastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [disagree, setDisagree] = useState(true);
    
    useEffect(() => {
      const token = localStorage.getItem('ACCESS_TOKEN');
      if (token) {
        navigate('/home');
      }
    }, [navigate]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    axiosClient.post('/register', formData)
        .then((response) => {
            setIsLoading(false);
            console.log(response)
            axiosClient.post('/login', formData)
            .then(response => {
                // Store token to local storage
                const token = response.data.token;
                const storedId = response.data.user_id
                localStorage.setItem('ACCESS_TOKEN', token);
                localStorage.setItem('ID', storedId);
                window.location.reload()
                // navigateTo('/');
            }).catch(error => {
                toast.error(error.message)
            });
        })
        .catch((error) => {
            setIsLoading(false);
            if (error.response && error.response.data && error.response.data.message) {
                const errors = error.response.data.errors;
                console.log(error)
                if (errors.email) {
                    toast.error(errors.email[0]);
                    setEmailError(true);
                }
                
                if (errors.password) {
                    toast.error(errors.password[0]);
                    setPasswordError(true);
                }
            }
        });
};

  return (
    <Container fluid className="vh-100">
      <ToastContainer/>
      {responseMessage && (<AlertMessage type="success" message={responseMessage}/>)}
      {errorMessage && (<AlertMessage type="danger" message={errorMessage}/>)}
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
            <form onSubmit={handleSubmit}>
            <div className="field d-flex df-column mb-4 w-100">
              <FloatLabel>
                <InputText
                  id="firstName"
                  name='firstName'
                  required value={formData.firstName}
                  onChange={handleChange}
                />
                <label >First Name</label>
              </FloatLabel>
            </div>
            <div className="field d-flex df-column mb-4 w-100">
              <FloatLabel>
                <InputText
                  id="lastName"
                  name='lastName'
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <label htmlFor="username">Last Name</label>
              </FloatLabel>
            </div>
            <div className="field d-flex df-column mb-4 w-100">
              <FloatLabel>
                <InputText
                  id="email"
                  name='email'
                  required value={formData.email}
                  onChange={handleChange}
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
                  name='password'
                  required 
                  value={formData.password}
                  onChange={handleChange}
                />
                <label htmlFor="username">Password</label>
              </FloatLabel>
            </div>
            <div className="d-flex justify-content-center w-100 mb-5">
              <Button label="Submit" className="w-100" />
            </div>
            </form>
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
