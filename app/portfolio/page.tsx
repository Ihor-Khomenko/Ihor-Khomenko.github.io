'use client'

import { AppContainer, LeftSide, RightSide } from '../styles'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Portfolio from '@/components/Portfolio'

export default function PortfolioPage() {
  return (
    <AppContainer>
      <LeftSide>
        <Header />
        <Navigation />
      </LeftSide>
      <RightSide>
        <Portfolio />
      </RightSide>
    </AppContainer>
  )
} 