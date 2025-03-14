'use client'

import { AppContainer, LeftSide, RightSide } from './styles'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <AppContainer>
      <LeftSide>
        <Header />
        <Navigation />
      </LeftSide>
      <RightSide>
        <Skills />
      </RightSide>
    </AppContainer>
  )
} 