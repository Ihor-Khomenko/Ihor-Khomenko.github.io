import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";


function App() {
    return (
        <Router>
            <Header />
            <Navigation />
            <Routes>
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                {/* add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;

