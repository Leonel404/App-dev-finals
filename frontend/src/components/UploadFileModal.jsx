import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './UploadFileModal.css'

function UploadFileModal({ isOpen, onClose }) {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Function to handle file selection
  const handleFileSelection = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  // Function to handle file upload
  const handleFileUpload = () => {
    // Logic to handle file upload
    console.log("Files uploaded:", selectedFiles);
    setSelectedFiles([]);
    onClose();
  };

  // Function to handle file drop
  const handleFileDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    if (files.length > 0) {
      setSelectedFiles([...selectedFiles, ...files]);
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

  // Function to delete a selected file
  const deleteFile = (index, event) => {
    event.stopPropagation(); // Stop event propagation to prevent opening file dialog
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleClose = () => {
    setSelectedFiles([]);
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={handleClose} className="FileUpload-container">
      <Modal.Header closeButton>
        <Modal.Title>Upload Files</Modal.Title>
      </Modal.Header>
      <Modal.Body
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        onClick={openFileDialog}
        style={{ cursor: "pointer", overflow:'auto' }}
      >
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileSelection}
          multiple  // Allow multiple file selection
        />
        {selectedFiles.length === 0 ? (
          <p style={{color: 'white'}}>Drag and drop files here or click to select files.</p>
        ) : (
          <div>
            <p className="file">Selected files:</p>
            <ul className="d-flex flex-column">
              {selectedFiles.map((file, index) => (
                <li style={{color: 'white', borderBottom:'1px solid rgb(39, 122, 201)'}} className="p-1 d-flex align-items-center" key={index} >
                  <div className="w-75">{file.name}</div>
                  <div className="w-25"><Button className="delete-btn" variant="danger" size="sm" onClick={(event) => deleteFile(index, event)}>Delete</Button></div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleFileUpload}
          disabled={selectedFiles.length === 0}
        >
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UploadFileModal;
