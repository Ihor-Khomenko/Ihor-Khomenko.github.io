'use client'

import { AppContainer, LeftSide, RightSide } from '../styles'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Experience from '@/components/Experience'

export default function ExperiencePage() {
  return (
    <AppContainer>
      <LeftSide>
        <Header />
        <Navigation />
      </LeftSide>
      <RightSide>
        <Experience />
      </RightSide>
    </AppContainer>
  )
} 