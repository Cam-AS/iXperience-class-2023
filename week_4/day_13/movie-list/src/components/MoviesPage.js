import React from 'react';

import './Navigation.css';

import { Link } from 'react-router-dom';

export default function MoviesPage() {
  return (
    <div>
      <div className="mt-5 me-5 d-flex justify-content-end">
        <Link to="/add-movie" className="nav-link">
          Add Movie
        </Link>
      </div>
    </div>
  );
}
