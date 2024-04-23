import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./UserLayout.css";
import "primeicons/primeicons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHardDrive } from "@fortawesome/free-regular-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Button } from "primereact/button";
import Logo from "../images/logonimo.png";
import profile from "../images/dog.jpg";
function UserLayout() {
  return (
    <Container fluid className="vh-100">
      <Row className="d-flex flex-row flex-grow-1 h-100">
        <Col xs={2} className="side-nav">
          <div className="logo-container d-flex flex-column align-items-center">
            <div className="logo">
              <img src={Logo} alt="" className="w-100 h-100" />
            </div>
          </div>
          <div className="w-100 p-1 mx-2 mb-3">
            <Button label="+ New" className="w-50" />
          </div>
          <div className="label-container d-flex flex-column">
            <div className="label" tabindex="0">
              <FontAwesomeIcon icon={faHome} className="icon" />
              <label>Home</label>
            </div>
            <div className="label" tabindex="0">
              <FontAwesomeIcon icon={faHardDrive} />
              <label>My Drive</label>
            </div>
            <div className="label" tabindex="0">
              <FontAwesomeIcon icon={faUserGroup} />
              <label>Shared with me</label>
            </div>
            <div className="label" tabindex="0">
              <FontAwesomeIcon icon={faClockRotateLeft} />
              <label>Recent</label>
            </div>
            <div className="label" tabindex="0">
              <FontAwesomeIcon icon={faTrash} />
              <label>Trash</label>
            </div>
          </div>
        </Col>
        <Col>
          <Row className="header">
            <Col>
              <div className="w-100 h-100 d-flex fleX-column align-items-center">
                <div className=" search-container">
                  <div className="search-icon">
                    <span className="pi pi-search"></span>
                  </div>
                  <input type="text" className="search-bar" />
                </div>
                <div className="w-100 h-100 d-flex align-items-center justify-content-end">
                  <div className="profile-container">
                    <div className="profile-pic w-100 h-100">
                      <img
                        src={profile}
                        alt="profile picture"
                        className="profile w-100 h-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default UserLayout;
