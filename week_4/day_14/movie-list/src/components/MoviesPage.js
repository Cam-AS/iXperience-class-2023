import React, { useState, useEffect } from 'react';

import './Navigation.css';

import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import MoviesService from '../services/movies.service';
import FileService from '../services/file.service';

import './MoviesPage.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [movieToRemove, setMovieToRemove] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const movies = await MoviesService.fetchMovies();
      setMovies(movies);
    } catch (err) {
      console.log(err);
    }
  }

  async function removeMovie() {
    await MoviesService.deleteMovie(movieToRemove.id);
    await FileService.deleteFile(movieToRemove.downloadUrl);

    setMovies(movies.filter((movie) => movie.id !== movieToRemove.id));

    hideModal();
  }

  function hideModal() {
    setMovieToRemove(null);
    setShowModal(false);
  }

  return (
    <div className="container mt-5">
      <div className="mt-5 me-5 d-flex justify-content-end">
        <Link to="/add-movie" className="nav-link">
          Add Movie
        </Link>
      </div>

      <div className="d-flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="card">
              <img
                src={movie.downloadUrl}
                className="movie-img"
                alt="Movie Poster"
              ></img>
              <div className="card-body">{movie.name}</div>

              <div
                className="remove-button btn btn-secondary"
                onClick={() => {
                  setMovieToRemove(movie);
                  setShowModal(true);
                }}
              >
                <i className="bi bi-trash"></i>
              </div>
            </div>
          );
        })}
      </div>

      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Delete Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {movieToRemove?.name}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={hideModal}>
            Close
          </button>
          <button className="btn btn-danger" onClick={removeMovie}>
            Yes, Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
