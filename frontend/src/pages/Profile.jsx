import React, { useState, useEffect } from "react";
import "./Login.css";
import {
    Container,
    Row,
} from "react-bootstrap";

function Login() {
return(
    <Container fluid className=" g-0">
        <Row className="h-100">
            <div className="container">
                <div className="w-25 h-25">
                    <img src={Logo} alt="" className="w-100 h-100" />
                </div>
            </div>
        </Row>
    </Container>
    
)
}


export default Login;
