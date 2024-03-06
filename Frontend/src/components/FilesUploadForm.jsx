import '../App.css';
import { useState, useRef } from 'react';
import BackButton from './BackButton';
import { useContext } from "react";
import { AppContext } from "../store/app-context";

function FileUploadForm() {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);
  const { switchBackToMainFromFUForm } = useContext(AppContext);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles([...files, ...selectedFiles]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const droppedFiles = event.dataTransfer.files;
    setFiles([...files, ...droppedFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleRemoveFile = (fileName) => {
    const updatedFiles = files.filter(file => file.name !== fileName);
    setFiles(updatedFiles);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append(`pdfFiles[${i}]`, files[i]);
      }
      fetch("http://127.0.0.1:8000/api/", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log(response);
          setFiles([]);
        })
        .catch((error) => {
          console.log(error)
        });
    }
  };

  const handleClick = (event) => {
    if (!event.target.closest(".submit-button")) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="file-upload-container" onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
      <div className={`mt-${files.length > 0 ? '0' : '48'}`}>
        <form onSubmit={handleSubmit} className={`file-upload-form ${dragging ? 'drag-over' : ''}`}>
          <input type="file" accept="application/pdf" multiple onChange={handleFileChange} className="file-upload-input" ref={fileInputRef} style={{ display: 'none' }} />

          <div className="flex items-center mb-2 text-2xl hover:cursor-pointer" onClick={handleClick}>
            <label className="file-upload-label" style={{ marginLeft: '19vw' }}>
              <img
                src="/submit.png"
                alt="Drag Icon"
                className="upload-icon mt-5"
                style={{ width: '9vw', height: '20vh' }}
              />
            </label>
            <div>Drop files here <br /> or <br /> click to upload</div>
          </div>

          <div className="selected-files-container">
            <div className="selected-files-wrapper">
              {files.map((file, index) => (
                <div key={index} className="selected-file" >
                  <span>{file.name}</span>
                  <button type="button" onClick={() => handleRemoveFile(file.name)}>Remove</button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <BackButton switchButton={() => { switchBackToMainFromFUForm(true) }} />
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FileUploadForm;
