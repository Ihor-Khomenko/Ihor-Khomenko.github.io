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
`

const Name = styled.h1`
  text-align: center;
`

const Title = styled.h2`
  text-align: center;
`

const SocialMediaLinks = styled.div`
  text-align: center;
`

const Link = styled.a`
  margin-right: 1em;
`

const Icon = styled.svg`
  width: 24px;
  height: 24px;
  display: block;
  margin: auto;
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
      <Name>Ihor Khomenko</Name>
      <Title>Software QA Engineer</Title>
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
    </HeaderWrapper>
  )
} 