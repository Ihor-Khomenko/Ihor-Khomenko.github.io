'use client'

import { AppContainer, LeftSide, RightSide } from '../styles'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import CVDownload from '@/components/CVDownload'

export default function CVPage() {
  return (
    <AppContainer>
      <LeftSide>
        <Header />
        <Navigation />
      </LeftSide>
      <RightSide>
        <CVDownload />
      </RightSide>
    </AppContainer>
  )
} 