'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './icons'

const HeaderWrapper = styled.div`
  background-color: lightyellow;
`

const ProfileImage = styled(Image)`
  width: 250px;
  border-radius: 40%;
  display: block;
  margin: auto;
  position: relative;
  top: -50px;
  margin-bottom: -30px;
`

const Name = styled.h1`
  text-align: center;
  margin-top: 1em;
`

const Title = styled.h2`
  text-align: center;
`

const SocialMediaLinks = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`

const Link = styled.a`
  display: inline-block;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  margin: 0 8px;

  &:hover {
    opacity: 1;
  }

  img {
    filter: brightness(0.2);
    transition: filter 0.2s ease;
  }

  &:hover img {
    filter: brightness(0);
  }
`

export default function Header() {
  return (
    <HeaderWrapper>
      <ProfileImage
        src="/img/profile.png"
        alt="Ihor Khomenko"
        width={250}
        height={250}
      />
      <SocialMediaLinks>
        <Link href="https://github.com/Ihor-Khomenko" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/ihorkhomenko/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon />
        </Link>
        <Link href="https://www.instagram.com/ihor.khomenko/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </Link>
      </SocialMediaLinks>
      <Name>Ihor Khomenko</Name>
      <Title>Software QA Engineer</Title>
    </HeaderWrapper>
  )
} 