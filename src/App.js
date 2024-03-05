import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SalePage from './pages/SalePage';
import ProfilePage from "./pages/ProfilePage";

function App() {
  

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/danyang-dao" element={<AboutPage />} />
        <Route path='/nfts' element={<SalePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
