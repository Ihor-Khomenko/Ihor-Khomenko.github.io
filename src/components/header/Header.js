import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: lightyellow;
`;

const Image = styled.img`
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
            <Image src="/src/img/photo.jpg" alt="Ihor Khomenko" />
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
