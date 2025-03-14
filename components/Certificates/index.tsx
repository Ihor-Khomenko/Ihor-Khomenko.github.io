'use client'

import styled from 'styled-components'

const Title = styled.h1`
  margin-bottom: 2em;
`

const CertificateList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2em;
`

const CertificateItem = styled.div`
  padding: 1.5em;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const CertificateName = styled.h2`
  margin-bottom: 0.5em;
  color: #333;
  font-size: 1.2em;
`

const CertificateDate = styled.p`
  color: #666;
  margin-bottom: 1em;
`

const CertificateLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

interface Certificate {
  name: string
  date: string
  link: string
}

const certificates: Certificate[] = [
  {
    name: "ISTQB® Certified Tester Foundation Level",
    date: "2018",
    link: "https://zertdb.isqi.org/en/download/certificate/token/Yg4688X8vNaEX29N"
  },
  {
    name: "OWASP TOP-10 Certified",
    date: "2023",
    link: "https://svyat.tech/certificate-owasp-web-ihor-khomenko"
  }
]

export default function Certificates() {
  return (
    <div>
      <Title>Certificates</Title>
      <CertificateList>
        {certificates.map((cert, index) => (
          <CertificateItem key={index}>
            <CertificateName>{cert.name}</CertificateName>
            <CertificateDate>{cert.date}</CertificateDate>
            <CertificateLink href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </CertificateLink>
          </CertificateItem>
        ))}
      </CertificateList>
    </div>
  )
} 