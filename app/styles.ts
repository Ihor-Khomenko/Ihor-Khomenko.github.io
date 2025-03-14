'use client'

import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
    
    &:visited {
      color: inherit;
    }
  }
`

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 2em;
  gap: 2em;
  background-color: #f0f8ff;
`

export const LeftSide = styled.div`
  background-color: lightyellow;
  width: 30%;
  min-height: 75vh;
  border-radius: 15px;
  position: relative;
`

export const RightSide = styled.div`
  background-color: white;
  width: 70%;
  min-height: 75vh;
  border-radius: 15px;
  padding: 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const ContentArea = styled.div`
  padding: 1em;
` 