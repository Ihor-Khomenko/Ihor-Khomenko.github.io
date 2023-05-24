import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationWrapper = styled.div`
  // add styles here
`;

function Navigation() {
    return (
        <NavigationWrapper>
            <Link to="/skills">Skills</Link>
            <Link to="/experience">Experience</Link>
            {/* add other links here */}
        </NavigationWrapper>
    );
}

export default Navigation;
