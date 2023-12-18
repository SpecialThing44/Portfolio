// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';


//import './App.css'
import { ThemeProvider } from './contexts/themeContext';
import './styles/global.css';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Landing from './pages/landing/landing';
import PageNotFound from './pages/page-not-found/page-not-found';
import Contact from './pages/contact/contact';



function RoutesWithTransitions() {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={1000}
      >
        <Routes location={location}>
          <Route path="" element={<Landing />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <RoutesWithTransitions />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;