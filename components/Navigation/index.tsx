'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import { CertificateIcon } from './icons'

const NavContainer = styled.nav`
  padding: 1em;
  display: flex;
  gap: 1em;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2em;
`

const NavLink = styled(Link)`
  padding: 0.5em 1em;
  font-size: 1.1em;
  color: #333;
  transition: all 0.2s ease;
  border-radius: 8px 8px 0 0;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #000;
    background-color: rgba(0, 0, 0, 0.05);
  }

  &[data-active="true"] {
    color: #000;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom: 1px solid #fff;
    margin-bottom: -1px;
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
  const pathname = usePathname();

  return (
    <NavContainer>
      <NavLink href="/" data-active={pathname === '/'}>
        <NavLinkContent>Skills</NavLinkContent>
      </NavLink>
      <NavLink href="/experience" data-active={pathname === '/experience'}>
        <NavLinkContent>Experience</NavLinkContent>
      </NavLink>
      <NavLink href="/portfolio" data-active={pathname === '/portfolio'}>
        <NavLinkContent>Portfolio</NavLinkContent>
      </NavLink>
      <NavLink href="/education" data-active={pathname === '/education'}>
        <NavLinkContent>Education</NavLinkContent>
      </NavLink>
      <NavLink href="/certificates" data-active={pathname === '/certificates'}>
        <NavLinkContent>
          <Icon as={CertificateIcon} />
          Certificates
        </NavLinkContent>
      </NavLink>
      <NavLink href="/cv" data-active={pathname === '/cv'}>
        <NavLinkContent>CV Download</NavLinkContent>
      </NavLink>
    </NavContainer>
  )
} 