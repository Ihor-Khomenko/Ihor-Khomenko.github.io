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
  margin-top: -20px;
`

const Link = styled.a`
  display: inline-block;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`

const Icon = styled.svg`
  width: 20px;
  height: 20px;
  display: inline-block;
  margin: 0 8px;
  vertical-align: middle;
  fill: currentColor;
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
          <Icon as={GithubIcon} />
        </Link>
        <Link href="https://www.linkedin.com/in/ihorkhomenko/" target="_blank" rel="noopener noreferrer">
          <Icon as={LinkedinIcon} />
        </Link>
        <Link href="https://www.instagram.com/ihor.khmnk/" target="_blank" rel="noopener noreferrer">
          <Icon as={InstagramIcon} />
        </Link>
      </SocialMediaLinks>
      <Name>Ihor Khomenko</Name>
      <Title>Software QA Engineer</Title>
    </HeaderWrapper>
  )
} 