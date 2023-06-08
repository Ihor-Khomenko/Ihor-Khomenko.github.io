import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as CertificateIcon } from '../../img/certificate-solid.svg';

const NavLink = styled(Link)`
  margin-right: 1em;
`;

const StyledCertificateIcon = styled(CertificateIcon)`
  width: 20px;
  height: 20px;
`;

const NavLinkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Navigation() {
    return (
        <nav>
            <NavLink to="/">Skills</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/certificates">
                <NavLinkContent>
                    <StyledCertificateIcon />
                    Certificates
                </NavLinkContent>
            </NavLink>
            <NavLink to="/cv-download">CV Download</NavLink>
        </nav>
    );
}

export default Navigation;
