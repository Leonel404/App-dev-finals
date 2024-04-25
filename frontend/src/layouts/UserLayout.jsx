import { React, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./UserLayout.css";
import "primeicons/primeicons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHardDrive } from "@fortawesome/free-regular-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "primereact/button";
import Logo from "../images/logonimo.png";
import profile from "../images/dog.jpg";
import { Menu, MenuItem } from "@mui/material";
function UserLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              <MenuItem onClick={handleClose}>New Folder</MenuItem>
              <hr className="line "/>
              <MenuItem onClick={handleClose}>Upload File</MenuItem>
              <MenuItem onClick={handleClose}>Upload Folder</MenuItem>
            </Menu>
          </div>
          <div className="label-container d-flex flex-column">
            <div className="label" tabindex="0">
              <FontAwesomeIcon icon={faHome} className="icon" />
              <label>Home</label>
            </div>
            <div className="label" tabindex="0">
              <FontAwesomeIcon icon={faHardDrive} className="icon" />
              <label>My Drive</label>
            </div>
            <div className="label" tabindex="0">
              <FontAwesomeIcon icon={faUserGroup} className="icon" />
              <label>Shared with me</label>
            </div>
            <div className="label" tabindex="0">
              <FontAwesomeIcon icon={faClockRotateLeft} className="icon"  />
              <label>Recent</label>
            </div>
            <div className="label" tabindex="0">
              <FontAwesomeIcon icon={faTrash} className="icon"  />
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
    </Container>
  );
}

export default UserLayout;
