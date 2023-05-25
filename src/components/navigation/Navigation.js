import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  margin-right: 1em; 
`;

function Navigation() {
    return (
        <nav>
            <NavLink to="/">Skills</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/certificates">Certificates</NavLink>
            <NavLink to="/cv-download">CV Download</NavLink>
        </nav>
    );
}

export default Navigation;
