'use client'

import styled from 'styled-components'
import { WorkExperience } from './WorkExperience'

const Title = styled.h1`
  margin-bottom: 2em;
`

export default function Experience() {
  return (
    <div>
      <Title>Experience</Title>
      <WorkExperience
        companyName="Akvelon, Inc."
        companyLink="https://akvelon.com/"
        dates="October 2019 - till now"
        responsibilities={[
          "E2E and integration testing React web app using JavaScript",
          "Test design, creating and maintaining test cases",
          "Exploratory testing, functional testing",
          "Git, SVN"
        ]}
        skills={[
          "JavaScript",
          "QA Automation",
          "Continuous Integration and Continuous Delivery (CI/CD)",
          "Test Cases",
          "Manual Testing",
          "SQL",
          "Git",
          "Jenkins",
          "Jest",
          "Puppeteer",
          "Playwright"
        ]}
      />
      <WorkExperience
        companyName="DashDevs LLC"
        companyLink="https://dashdevs.com/"
        dates="January 2019 - October 2019"
        responsibilities={[
          "Android and iOS native app testing",
          "React Native app testing",
          "Backend testing (REST API)",
          "Creating Postman autotests using JS language",
          "Web UI testing",
          "Load testing experience using JMeter",
          "Charles, Fiddler",
          "Android Studio, Xcode for debugging and log",
          "Daily meetings with foreign client",
          "Creating test cases, test plan and test reports"
        ]}
        skills={[
          "REST APIs",
          "Test Cases",
          "Manual Testing",
          "SQL",
          "Black Box Testing",
          "Performance Testing"
        ]}
      />
    </div>
  )
} 