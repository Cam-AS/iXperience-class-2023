import './App.css';

import { useState, useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import bootstrap
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// component imports
import Navbar from './components/common/Navbar';
import LoginPage from './components/auth/LoginPage';
import ChatsPage from './components/chat/ChatsPage';
import RegisterPage from './components/auth/RegisterPage';
import RequireAuth from './components/common/RequireAuth';
import Spinner from './components/common/Spinner';

function App() {
  const [user, setUser] = useState(null);
  const [isUserSet, setIsUserSet] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserSet(true);
    });

    return () => unsub();
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      {isUserSet ? (
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth user={user}>
                <ChatsPage user={user} />
              </RequireAuth>
            }
          ></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      ) : (
        <div className="text-center mt-5">
          <Spinner />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
