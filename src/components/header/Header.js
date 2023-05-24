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

function Header() {
    return (
        <HeaderWrapper>
            <Image src="https://github.com/Ihor-Khomenko/cv/blob/main/src/img/photo.jpg?raw=true" alt="Ihor Khomenko" />
            <Name>Ihor Khomenko</Name>
            <Title>Software QA Engineer</Title>
            <SocialMediaLinks>
                <a href="https://github.com/Ihor-Khomenko">GitHub</a>
                <a href="https://www.linkedin.com/in/ihorkhomenko/">LinkedIn</a>
                <a href="https://www.instagram.com/">Instagram</a>
            </SocialMediaLinks>
        </HeaderWrapper>
    );
}

export default Header;
