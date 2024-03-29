//src/app.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Services from './components/Services';
import BookAppointment from './components/BookAppointment'; // Make sure this import path is correct

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
              <Header />
              <Hero />
              <Benefits />
              <Collaboration />
              <Services />
              <Pricing />
              <Roadmap />
              <Footer />
            </div>
            <ButtonGradient />
          </>
        } />
        <Route path="/book-appointment" element={
          <>
        <BookAppointment />
        </>
        } />
      </Routes>
    </>
  );
};

export default App;
