import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import Person from './components/Person';
import Country from './components/Person';
import Navbar from './pages/Navabar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Error from './pages/Error';

import store from './pages/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </Provider>

      {/* <Navbar /> */}
      <Person
        name="henry"
        email="henry@gmail.com"
        age={23}
        isMarried={false}
        friends={['john', 'victor', 'daisy']}
        // Country={Country.Kenay}
      />
    </div>
  );
}

export default App;
