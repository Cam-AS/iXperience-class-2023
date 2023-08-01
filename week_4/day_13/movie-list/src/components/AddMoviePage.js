import React, { useState } from 'react';

import './Navigation.css';

import { Link } from 'react-router-dom';

import FileService from '../services/file.service';

export default function AddMoviePage() {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  async function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);

      const downloadUrl = await FileService.uploadImage(
        e.target.files[0],
        (progress) => {
          console.log('Percentage Uploaded: ', progress);
        }
      );
      console.log('Download Url: ', downloadUrl);
    } else {
      setFile(null);
    }
  }

  return (
    <div>
      <div className="mt-5 me-5 d-flex justify-content-end">
        <Link to="/" className="nav-link">
          Movie List
        </Link>
      </div>
      <div className="container mt-5">
        <div className="card card-body">
          <h1>Add Movie</h1>

          <form>
            <div className="mb-3">
              <label className="form-label">Movie Cover Image</label>
              <input
                type="file"
                className="form-control"
                onChange={onFileSelected}
                multiple
              ></input>
            </div>

            <div className="mb-3">
              <label className="form-label">Movie Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter Movie Name"
              ></input>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Add Movie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
