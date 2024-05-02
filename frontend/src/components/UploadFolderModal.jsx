import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './UploadFileModal.css'

function UploadFileModal({ isOpen, onClose }) {
  const fileInputRef = useRef(null);
  const [selectedFolder, setSelectedFolder] = useState(null);

  // Function to handle file selection
  const handleFileSelection = (event) => {
    const fileList = event.target.files;
    if (fileList.length === 1) {
      setSelectedFolder(fileList[0]);
    }
  };

  // Function to handle file upload
  const handleFileUpload = () => {
    setSelectedFolder(null);
    // Logic to handle file upload
    console.log("Folder uploaded:", selectedFolder);
    onClose();
  };

  // Function to handle file drop
  const handleFileDrop = (event) => {
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    if (fileList.length === 1) {
      setSelectedFolder(fileList[0]);
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

  // Function to reset selected file and close modal
  const handleClose = () => {
    setSelectedFolder(null);
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={handleClose} className="FileUpload-container">
      <Modal.Header closeButton>
        <Modal.Title>Upload Folder</Modal.Title>
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
          directory=""
          webkitdirectory=""
          mozdirectory=""
        />
        {!selectedFolder ? (
          <p>Drag and drop folders here or click to select.</p>
        ) : (
          <p className="file">Selected folder: {getFolderName(selectedFolder)}</p>
        )}
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleFileUpload}
          disabled={!selectedFolder}
        >
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// Function to get the folder name from the File object
function getFolderName(folder) {
  // Use webkitRelativePath to extract folder name
  const relativePath = folder.webkitRelativePath || folder.mozFullPath || folder.name;
  return relativePath.split('/')[0];
}

export default UploadFileModal;
