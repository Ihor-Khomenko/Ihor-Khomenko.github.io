'use client'

import styled from 'styled-components'

const Title = styled.h1`
  margin-bottom: 2em;
`

const PortfolioItem = styled.div`
  margin-bottom: 2em;
  padding: 1.5em;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ProjectName = styled.h2`
  margin-bottom: 0.5em;
  color: #333;
`

const Role = styled.h3`
  margin-bottom: 1em;
  color: #666;
`

const Description = styled.p`
  line-height: 1.6;
  color: #444;
`

export default function Portfolio() {
  return (
    <div>
      <Title>Portfolio</Title>
      <PortfolioItem>
        <ProjectName>Tideworks</ProjectName>
        <Role>QA Automation Engineer</Role>
        <Description>
          As a QA Automation Engineer dedicated to the billing component of a project, my role is to ensure the quality and reliability of the system. I focus on automated testing, reporting and validation of the accuracy and efficiency of billing processes within the logistics and cargo management solution.
        </Description>
      </PortfolioItem>
      <PortfolioItem>
        <ProjectName>Marvel</ProjectName>
        <Role>QA Engineer</Role>
        <Description>
          A set of applications for sellers and customers, which included a web application, iOS and Android mobile applications for sellers and iOS and Android mobile applications for customers. I performed manual testing of mobile applications, automated API testing with JS + Postman, load testing with JMeter, collected logs in Xcode and Android Studio, and built the testing process from scratch.
        </Description>
      </PortfolioItem>
      <PortfolioItem>
        <ProjectName>Dozens</ProjectName>
        <Role>QA Engineer</Role>
        <Description>
          As a Manual QA Engineer for a Dozens application, my role involved thorough testing of both the API, iOS and Android apps. I ensured the quality and functionality of the application by conducting manual tests, identifying bugs, and validating the system's performance.
        </Description>
      </PortfolioItem>
    </div>
  )
} 