import React from 'react';
import styled from 'styled-components';
import profileImage from '../../img/img.png';
import { ReactComponent as GithubIcon } from '../../img/github.svg';
import { ReactComponent as LinkedinIcon } from '../../img/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../img/instagram.svg';

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

const Icon = styled.svg`
  width: 24px; // adjust the value as needed
  height: 24px; // adjust the value as needed
  display: block;
  margin: auto;
`;

function Header() {
    return (
        <HeaderWrapper>
            <Image src={profileImage} alt="Ihor Khomenko" />
            <Name>Ihor Khomenko</Name>
            <Title>Software QA Engineer</Title>
            <SocialMediaLinks>
                <Link href="https://github.com/Ihor-Khomenko">
                    <Icon as={GithubIcon} />

                </Link>
                <Link href="https://www.linkedin.com/in/ihorkhomenko/">
                    <Icon as={LinkedinIcon} />

                </Link>
                <Link href="https://www.instagram.com/ihor.khmnk/">
                    <Icon as={InstagramIcon} />

                </Link>
            </SocialMediaLinks>
        </HeaderWrapper>
    );
}

export default Header;