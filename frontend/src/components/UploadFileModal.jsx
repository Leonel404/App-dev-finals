import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './UploadFileModal.css'
function UploadFileModal({ isOpen, onClose }) {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileSelection = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Function to handle file upload
  const handleFileUpload = () => {
    setSelectedFile('');
    // Logic to handle file upload
    console.log("File uploaded:", selectedFile);
    onClose();
  };

  // Function to handle file drop
  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Prevent default behavior on drag over
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Function to open file dialog when clicking anywhere in the drop zone
  const openFileDialog = () => {
    fileInputRef.current.click();
  };
  const handleClose = () => {
    setSelectedFile('');
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={handleClose} className="FileUpload-container">
      <Modal.Header closeButton>
        <Modal.Title>Upload File</Modal.Title>
      </Modal.Header>
      <Modal.Body
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        onClick={openFileDialog}
        style={{ cursor: "pointer" }}
      >
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileSelection}
        />
        {!selectedFile ? (
          <p>Drag and drop files here or click to select files.</p>
        ) : (
          <p className="file">Selected file: {selectedFile.name}</p>
        )}
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleFileUpload}
          disabled={!selectedFile}
        >
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UploadFileModal;
