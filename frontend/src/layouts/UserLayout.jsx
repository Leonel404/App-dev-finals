import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./UserLayout.css";
import "primeicons/primeicons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHardDrive } from "@fortawesome/free-regular-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "primereact/button";
import Logo from "../images/logonimo.png";
import profile from "../images/dog.jpg";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NewFolderModal from "../components/NewFolderModal"; // Import the modal component
import UploadFileModal from "../components/UploadFileModal"; // Import the upload file modal component
import UploadFolderModal from "../components/UploadFolderModal"; // Import the upload folder modal component
import { useLocation } from 'react-router-dom';

function UserLayout() {
  const location = useLocation();
  const pathname = location.pathname;
  const routeName = pathname.substring(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [isUploadFileModalOpen, setIsUploadFileModalOpen] = useState(false); // State to control upload file modal visibility
  const [isUploadFolderModalOpen, setIsUploadFolderModalOpen] = useState(false); // State to control upload folder modal visibility
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  // Function to open modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
    handleClose(); // Close the menu
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to open upload file modal
  const handleOpenUploadFileModal = () => {
    setIsUploadFileModalOpen(true);
    handleClose(); // Close the menu
  };

  // Function to close upload file modal
  const handleCloseUploadFileModal = () => {
    setIsUploadFileModalOpen(false);
  };

  // Function to open upload folder modal
  const handleOpenUploadFolderModal = () => {
    setIsUploadFolderModalOpen(true);
    handleClose(); // Close the menu
  };

  // Function to close upload folder modal
  const handleCloseUploadFolderModal = () => {
    setIsUploadFolderModalOpen(false);
  };

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
            >
              <MenuItem onClick={handleOpenModal}>New Folder</MenuItem>
              <MenuItem onClick={handleOpenUploadFileModal}>Upload File</MenuItem>
              <MenuItem onClick={handleOpenUploadFolderModal}>Upload Folder</MenuItem>
            </Menu>
          </div>
          <div className="label-container d-flex flex-column">
            <div
              className={`label`}
              tabindex="0"
              onClick={() => navigate("/home")}
            >
              <FontAwesomeIcon icon={faHome} className="icon" />
              <label>Home</label>
            </div>
            <div
              className="label"
              tabindex="0"
              onClick={() => navigate("/mydrive")}
            >
              <FontAwesomeIcon icon={faHardDrive} className="icon" />
              <label>My Drive</label>
            </div>
            <div
              className="label"
              tabindex="0"
              onClick={() => navigate("/sharedwithme")}
            >
              <FontAwesomeIcon icon={faUserGroup} className="icon" />
              <label>Shared with me</label>
            </div>
            <div
              className="label"
              tabindex="0"
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
                  <div className="profile-container">
                    <div className="profile-pic w-100 h-100">
                      <img
                        src={profile}
                        alt="profile picture"
                        className="profile h-100"
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
      {/* Render the NewFolderModal component */}
      <NewFolderModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {/* Render the UploadFileModal component */}
      <UploadFileModal isOpen={isUploadFileModalOpen} onClose={handleCloseUploadFileModal} />
      {/* Render the UploadFolderModal component */}
      <UploadFolderModal isOpen={isUploadFolderModalOpen} onClose={handleCloseUploadFolderModal} />
    </Container>
  );
}

export default UserLayout;
