import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Help from "./pages/Help";
import Book from "./pages/Book";
import Thanks from "./pages/Thanks";


export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/nousaider" element={<Help/>} />
              <Route path="/livredor" element={<Book/>} />
              <Route path="/remerciements" element={<Thanks/>} />
          </Routes>

      </BrowserRouter>
  );
}
