import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import { createContext, useState } from 'react';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState('Nicholas karimi');

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile/" element={<Profile />} />
            <Route path="about/" element={<About />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
