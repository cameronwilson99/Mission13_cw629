import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Home from './Home';
import Podcast from './Podcast';
import NavBar from './Layout';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/MovieList" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
