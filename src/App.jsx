import React from 'react';
import Landingpage from './pages/LandingPage/Landingpage';
import History from './pages/History/History';
import Culinary from './pages/Culinary/Culinary';
import Culture from './pages/Culture/Culture';
import Economy from './pages/Economy/Economy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/culinary" element={<Culinary />} />
          <Route exact path="/economy" element={<Economy />} />
          <Route exact path="/culture" element={<Culture />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
