import React, { useState } from 'react';

import ImageSelector from '../common/ImageSelector';
import Button from '../common/Button';
import Alert from '../common/Alert';

import { useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import FileService from '../../services/file.service';
import ProfileService from '../../services/profile.service';

import { auth } from '../../firebase/firebase';

import { Profile } from '../../models/Profile';

export default function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function onFormSubmit(e) {
    e.preventDefault();

    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // file upload
      const downloadUrl = await FileService.uploadImage(file);

      // profile create
      await ProfileService.saveProfile(
        new Profile({
          id: userCred.user.uid,
          name: name,
          surname: surname,
          imageUrl: downloadUrl,
        })
      );

      navigate('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="container my-5">
      <div className="card card-body">
        <h1> Register</h1>
        <p>Please enter your details to register</p>

        <form onSubmit={onFormSubmit}>
          <ImageSelector
            title="Profile Picture"
            onFileChange={(file) => setFile(file)}
          />

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>

          <div className="d-flex justify-content-center mt-4">
            <Button type="submit" className="px-5" loading={loading}>
              Register
            </Button>
          </div>
        </form>

        <Alert className="mt-3" show={error} onHide={() => setError('')}>
          {error}
        </Alert>
      </div>
    </div>
  );
}
