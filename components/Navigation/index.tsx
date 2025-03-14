'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { CertificateIcon } from './icons'

const NavContainer = styled.nav`
  padding: 1em;
`

const NavLink = styled(Link)`
  display: block;
  margin-bottom: 1em;
  font-size: 1.1em;
  color: #333;
  transition: color 0.2s ease;

  &:hover {
    color: #666;
  }
`

const NavLinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`

const Icon = styled.svg`
  width: 20px;
  height: 20px;
`

export default function Navigation() {
  return (
    <NavContainer>
      <NavLink href="/">
        <NavLinkContent>Skills</NavLinkContent>
      </NavLink>
      <NavLink href="/experience">
        <NavLinkContent>Experience</NavLinkContent>
      </NavLink>
      <NavLink href="/portfolio">
        <NavLinkContent>Portfolio</NavLinkContent>
      </NavLink>
      <NavLink href="/education">
        <NavLinkContent>Education</NavLinkContent>
      </NavLink>
      <NavLink href="/certificates">
        <NavLinkContent>
          <Icon as={CertificateIcon} />
          Certificates
        </NavLinkContent>
      </NavLink>
      <NavLink href="/cv">
        <NavLinkContent>CV Download</NavLinkContent>
      </NavLink>
    </NavContainer>
  )
} 