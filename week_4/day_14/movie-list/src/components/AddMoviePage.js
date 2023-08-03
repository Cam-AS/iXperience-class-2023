import React, { useState } from 'react';

import './Navigation.css';

import { Link, useNavigate } from 'react-router-dom';

import FileService from '../services/file.service';
import MoviesService from '../services/movies.service';
import { Movie } from '../models/Movie';
import ImageSelector from './ImageSelector';

export default function AddMoviePage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      if (!isValid()) {
        alert('Fill in all fields');
        return;
      }
      // upload the file
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log('Percentage Uploaded: ', progress);
      });

      // save the Movie to the database with title & downloadUrl
      await MoviesService.createMovie(new Movie(null, name, downloadUrl));
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  function isValid() {
    return name && file;
  }

  function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
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

          <ImageSelector onFileChange={(file) => setFile(file)}></ImageSelector>

          <form onSubmit={onFormSubmit}>
            {/* <div className="mb-3">
              <label className="form-label">Movie Cover Image</label>
              <input
                type="file"
                className="form-control"
                onChange={onFileSelected}
                multiple
              ></input>
            </div> */}

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
