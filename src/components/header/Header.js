// Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: lightyellow;
`;

const Image = styled.img`
  width: 250px;
`;

const Name = styled.h1`
`;

const Title = styled.h2`
`;

const SocialMediaLinks = styled.div`
`;

const Link = styled.a`
  margin-right: 2em; // adjust the value as needed
`;

function Header() {
    return (
        <HeaderWrapper>
            <Image src="https://github.com/Ihor-Khomenko/cv/blob/main/src/img/photo.jpg?raw=true" alt="Ihor Khomenko" />
            <Name>Ihor Khomenko</Name>
            <Title>Software QA Engineer</Title>
            <SocialMediaLinks>
                <Link href="https://github.com/Ihor-Khomenko">GitHub</Link>
                <Link href="https://www.linkedin.com/in/ihorkhomenko/">LinkedIn</Link>
                <Link href="https://www.instagram.com/">Instagram</Link>
            </SocialMediaLinks>
        </HeaderWrapper>
    );
}

export default Header;
