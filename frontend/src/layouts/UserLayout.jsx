import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import "./UserLayout.css";
import "primeicons/primeicons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHardDrive,
  faUserGroup,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "primereact/button";
import Logo from "../images/logonimo.png";
import profile from "../images/dog.jpg";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NewFolderModal from "../components/NewFolderModal";
import UploadFileModal from "../components/UploadFileModal";
import UploadFolderModal from "../components/UploadFolderModal";
import { useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

function UserLayout() {
  const { setUser, setToken, user, token } = useStateContext();
  const location = useLocation();
  const pathname = location.pathname;
  const routeName = pathname.substring(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadFileModalOpen, setIsUploadFileModalOpen] = useState(false);
  const [isUploadFolderModalOpen, setIsUploadFolderModalOpen] = useState(false);
  const open = Boolean(anchorEl);

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, [setUser]);

  
  const handleLogout =  () => {
    axiosClient
      .post("/logout")
      .then(() => {
        setUser(null);
        setToken(null);
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    handleClose();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenUploadFileModal = () => {
    setIsUploadFileModalOpen(true);
    handleClose();
  };

  const handleCloseUploadFileModal = () => {
    setIsUploadFileModalOpen(false);
  };

  const handleOpenUploadFolderModal = () => {
    setIsUploadFolderModalOpen(true);
    handleClose();
  };

  const handleCloseUploadFolderModal = () => {
    setIsUploadFolderModalOpen(false);
  };

  if (!token) {
    return <Navigate to="/login" />;
  }


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
            <Button
              label="+ New"
              className="w-75 h-25"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              style={{ overflow: "hidden !importat" }}
            >
              <MenuItem onClick={handleOpenModal} className="NewFolderModal">
                New Folder
              </MenuItem>
              <hr className="line" />
              <MenuItem
                onClick={handleOpenUploadFileModal}
                className="NewUploadFile"
              >
                Upload File
              </MenuItem>
              <MenuItem
                onClick={handleOpenUploadFolderModal}
                className="NewFolderFile"
              >
                Upload Folder
              </MenuItem>
            </Menu>
          </div>
          <div className="label-container d-flex flex-column">
            <div
              className={`label`}
              tabIndex="0"
              onClick={() => navigate("/home")}
            >
              <FontAwesomeIcon icon={faHome} className="icon" />
              <label>Home</label>
            </div>
            <div
              className="label"
              tabIndex="0"
              onClick={() => navigate("/mydrive")}
            >
              <FontAwesomeIcon icon={faHardDrive} className="icon" />
              <label>My Drive</label>
            </div>
            <div
              className="label"
              tabIndex="0"
              onClick={() => navigate("/sharedwithme")}
            >
              <FontAwesomeIcon icon={faUserGroup} className="icon" />
              <label>Shared with me</label>
            </div>
            <div
              className="label"
              tabIndex="0"
              onClick={() => navigate("/trash")}
            >
              <FontAwesomeIcon icon={faTrash} className="icon" />
              <label>Trash</label>
            </div>
          </div>
        </Col>
        <Col>
          <Row className="header">
            <Col>
              <div className="w-100 h-100 d-flex fleX-column align-items-center">
                <div className=" search-container mx-1">
                  <div className="search-icon">
                    <span
                      className="pi pi-search bg-white"
                      style={{ color: "black" }}
                    ></span>
                  </div>
                  <input type="text" className="search-bar" />
                </div>

                <div className="w-100 h-100 d-flex align-items-center justify-content-end">
                  <div className="name-container d-flex justify-content-between">
                    <div>
                      <label
                        style={{
                          color: "white",
                          fontSize: "15px",
                          marginRight: "10px",
                        }}
                      >
                        {user.firstName}
                      </label>
                    </div>
                    <div>
                      <label
                        style={{
                          color: "white",
                          fontSize: "15px",
                          marginRight: "10px",
                        }}
                      >
                        {user.lastName}
                      </label>
                    </div>
                  </div>
                  <div className="profile-container">
                    <div className="profile-pic w-100 h-100">
                      <Dropdown className="dropdown">
                        <img
                          src={profile}
                          alt="profile picture"
                          className="profile h-100"
                        />
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "45px",
                            height: "45px",
                            opacity: 0,
                          }}
                        ></Dropdown.Toggle>
                        <Dropdown.Menu className="menu-profile">
                          <Dropdown.Item href="/profile" className="menu-label">
                            Profile
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={handleLogout}
                            className="menu-label"
                          >
                            Log out
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
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
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
      <NewFolderModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <UploadFileModal
        isOpen={isUploadFileModalOpen}
        onClose={handleCloseUploadFileModal}
      />
      <UploadFolderModal
        isOpen={isUploadFolderModalOpen}
        onClose={handleCloseUploadFolderModal}
      />
    </Container>
  );
}

export default UserLayout;
