import './App.css';

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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ChatsPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
