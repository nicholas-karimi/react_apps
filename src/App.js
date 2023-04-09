import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import { createContext, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, //turns off data update whena user switched tabs
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile/" element={<Profile />} />
            <Route path="about/" element={<About />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
