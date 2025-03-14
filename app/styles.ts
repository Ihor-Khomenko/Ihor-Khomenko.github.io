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
  font-family: 'Helvetica Neue', sans-serif;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  padding: 6em;
  position: relative;
  overflow: hidden;
`

export const LeftSide = styled.div`
  background-color: lightyellow;
  width: 30%;
  min-height: 75vh;
  max-height: 75vh;
  position: relative;
  left: 2ch;
  border-radius: 15px;
  z-index: 1;
`

export const RightSide = styled.div`
  background-color: beige;
  width: 70%;
  min-height: 100vh;
  padding-left: 4ch;
  border-radius: 15px;
` 