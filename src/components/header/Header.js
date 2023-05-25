// Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: lightyellow;
`;

const Image = styled.img`
  width: 250px;
  border-radius: 40%;
  display: block;
  margin: auto;
  position: relative;
  top: -50px;
`;

const Name = styled.h1`
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
`;

const SocialMediaLinks = styled.div`
  text-align: center;
`;

const Link = styled.a`
  margin-right: 1em; // adjust the value as needed
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
                <Link href="https://www.instagram.com/ihor.khmnk/">Instagram</Link>
            </SocialMediaLinks>
        </HeaderWrapper>
    );
}

export default Header;
