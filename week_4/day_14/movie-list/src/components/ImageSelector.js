import React, { useState, useRef } from 'react';

export default function ImageSelector({ onFileChange }) {
  // directly access a DOM element
  // { current: <>}
  const inputRef = useRef(null);
  const [fileContent, setFileContent] = useState('');

  function onFileSelected(e) {
    e.preventDefault();

    let file = null;

    if (e.target.files.length) {
      file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (res) => {
        setFileContent(res.target.result);
      };
      fileReader.readAsDataURL(file);
    }

    onFileChange(file);
  }

  return (
    <div className="mb-3">
      <input
        style={{ display: 'none' }}
        type="file"
        ref={inputRef}
        className="form-control"
        onChange={onFileSelected}
        multiple
      ></input>

      {fileContent ? (
        <div className="text-center mb-4">
          <img
            alt="Movie Cover"
            style={{
              width: '200px',
              height: '250px',
              objectFit: 'cover',
            }}
            src={fileContent}
          ></img>
        </div>
      ) : (
        <></>
      )}

      <div className="text-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            inputRef.current.click();
          }}
        >
          Select Image
        </button>
      </div>
    </div>
  );
}
