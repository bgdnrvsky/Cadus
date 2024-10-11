import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageHome from "./pages/PageHome";
import PageHelp from "./pages/PageHelp";
import PageBook from "./pages/PageBook";
import PageThanks from "./pages/PageThanks";

import Navbar from './components/Navbar';

export default function App() {
  return (
      <BrowserRouter>
          <Navbar/>

          <Routes>
              <Route path="/" element={<PageHome/>} />
              <Route path="/nousaider" element={<PageHelp/>} />
              <Route path="/livredor" element={<PageBook/>} />
              <Route path="/remerciements" element={<PageThanks/>} />
          </Routes>

      </BrowserRouter>
  );
}
