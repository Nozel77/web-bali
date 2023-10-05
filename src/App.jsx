import React from 'react';
import Landingpage from './pages/LandingPage/Landingpage';
import History from './pages/History/History';
import Culinary from './pages/Culinary/Culinary';
import Culture from './pages/Culture/Culture';
import Economy from './pages/Economy/Economy';
import Tour from './pages/Tour/Tour';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/culinary" element={<Culinary />} />
          <Route exact path="/tour" element={<Tour />} />
          <Route exact path="/economy" element={<Economy />} />
          <Route exact path="/culture" element={<Culture />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
