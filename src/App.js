import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { ThemeProvider} from './contexts/themeContext';

import './styles/global.css';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Landing from './pages/landing/landing';
import PageNotFound from './pages/page-not-found/page-not-found';
import Contact from './pages/contact/contact';


function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
            <Routes >
            <Route path="" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
            </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;