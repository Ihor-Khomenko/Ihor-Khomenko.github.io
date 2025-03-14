import type { Metadata } from 'next'
import StyledComponentsRegistry from './registry'
import { GlobalStyle } from './styles'

export const metadata: Metadata = {
  title: 'Ihor Khomenko - Software QA Engineer',
  description: 'Personal portfolio and CV of Ihor Khomenko, Software QA Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
} 