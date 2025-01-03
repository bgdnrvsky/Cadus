import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Help from "./pages/Help";
import Book from "./pages/Book";
import Thanks from "./pages/Thanks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Survey from "./pages/Survey";
import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/nousaider" element={<Help/>} />
                <Route path="/livredor" element={<Book/>} />
                <Route path="/remerciements" element={<Thanks/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/survey" element={<ProtectedRoute><Survey/></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}
