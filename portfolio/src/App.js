// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
//import './App.css'
import './styles/global.css';
import Landing from './pages/landing/landing';




function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="" exact element={<Landing />} />
    </Routes>
  </BrowserRouter>;
}

export default App;

