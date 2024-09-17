import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import PostDetails from './Details/PostDetail';

function App() {
  return (
    <BrowserRouter basename="/Goodir-Technology">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;