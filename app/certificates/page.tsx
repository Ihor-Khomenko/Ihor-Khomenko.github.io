'use client'

import { AppContainer, LeftSide, RightSide } from '../styles'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Certificates from '@/components/Certificates'

export default function CertificatesPage() {
  return (
    <AppContainer>
      <LeftSide>
        <Header />
        <Navigation />
      </LeftSide>
      <RightSide>
        <Certificates />
      </RightSide>
    </AppContainer>
  )
} 