import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import './NewFolderModal.css'
const NewFolderModal = ({ isOpen, onClose }) => {
  const [folderName, setFolderName] = useState("");

  const handleSubmit = (e) => {
    setFolderName('');
    e.preventDefault();
    if (folderName.trim() !== "") {
      console.log("Creating folder:", folderName);
      onClose();
    }
  };
  const handleClose = () => {
    setFolderName('');
    onClose();
  };
  return (
    <Modal show={isOpen} onHide={handleClose} className=" modal-container w-25 h-50">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title style={{color:'white'}}>Create New Folder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="folderName">
            <Form.Label style={{color:'white'}}>Folder Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter folder name"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              required
              className="mb-3"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-create">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewFolderModal;
