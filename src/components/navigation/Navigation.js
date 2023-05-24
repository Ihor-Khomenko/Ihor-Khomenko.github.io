import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationWrapper = styled.div`
  
`;

function Navigation() {
    return (
        <NavigationWrapper>
            <Link to="/skills">Skills</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/education">Education</Link>
            <Link to="/certificates">Certificates</Link>
            <Link to="/cv-download">CV Download</Link>
        </NavigationWrapper>
    );
}

export default Navigation;
