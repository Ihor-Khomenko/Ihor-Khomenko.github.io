import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Certificates from "./components/certificates/Certificates";
import CVDownload from "./components/cvdownload/CVDownload";
import Education from "./components/education/Education";

function App() {
    return (
        <Router>
            <Header />
            <Navigation />
            <Routes>
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/education" element={<Education />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/cv-download" element={<CVDownload />} />
            </Routes>
        </Router>
    );
}

export default App;

