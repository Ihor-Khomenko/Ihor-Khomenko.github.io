'use client'

import styled from 'styled-components'

const Title = styled.h1`
  margin-bottom: 2em;
`

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5em;
`

const SkillItem = styled.li`
  padding: 1.5em;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  color: #444;
`

const skills = [
  "Writing test automation for web using JavaScript (e2e and integration)",
  "Creating and maintaining Jenkins jobs",
  "Manual testing of mobile apps (native iOS, native Android, React Native cross platform) and React web apps",
  "Using Postman for API testing (automating tests and running collections)",
  "Using Fiddler/Charles for Web and mobile testing",
  "Load testing experience using JMeter",
  "Security testing with Burp Suite",
  "Create and maintain test documentation, testing estimation"
]

export default function Skills() {
  return (
    <div>
      <Title>Skills</Title>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </div>
  )
} 