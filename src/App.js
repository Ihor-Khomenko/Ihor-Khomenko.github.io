import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Certificates from "./components/certificates/Certificates";
import CVDownload from "./components/cvdownload/CVDownload";
import Education from "./components/education/Education";

const GlobalStyle = createGlobalStyle`
  a:visited {
    color: inherit;
  }
`;

const AppContainer = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  padding: 6em;
  position: relative;
  overflow: hidden;
`;

const LeftSide = styled.div`
  background-color: lightyellow;
  width: 30%;
  min-height: 75vh;
  max-height: 75vh;
  position: relative;
  left: 2ch;
  border-radius: 15px;
  z-index: 1;
`;

const RightSide = styled.div`
  background-color: beige;
  width: 70%;
  min-height: 100vh;
  padding-left: 4ch;
  border-radius: 15px;
`;

function App() {
    return (
        <Router>
            <GlobalStyle />
            <AppContainer>
                <LeftSide>
                    <Header />
                </LeftSide>
                <RightSide>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Skills />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/certificates" element={<Certificates />} />
                        <Route path="/cv-download" element={<CVDownload />} />
                    </Routes>
                </RightSide>
            </AppContainer>
        </Router>
    );
}

export default App;
