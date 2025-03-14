'use client'

import styled from 'styled-components'

const Title = styled.h1`
  margin-bottom: 2em;
`

const DownloadSection = styled.div`
  padding: 2em;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const DownloadLink = styled.a`
  display: inline-block;
  padding: 1em 2em;
  background-color: #0070f3;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0051cc;
  }
`

export default function CVDownload() {
  return (
    <div>
      <Title>CV Download</Title>
      <DownloadSection>
        <DownloadLink href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          Download CV (PDF)
        </DownloadLink>
      </DownloadSection>
    </div>
  )
} 