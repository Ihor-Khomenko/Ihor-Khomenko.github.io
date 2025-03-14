'use client'

import { AppContainer, LeftSide, RightSide, ContentArea } from '../styles'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <AppContainer>
      <LeftSide>
        <Header />
      </LeftSide>
      <RightSide>
        <Navigation />
        <ContentArea>
          {children}
        </ContentArea>
      </RightSide>
    </AppContainer>
  )
} 