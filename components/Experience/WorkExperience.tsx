'use client'

import styled from 'styled-components'

const Company = styled.h2`
  margin-bottom: 0.5em;
`

const Dates = styled.h3`
  color: #666;
  margin-bottom: 1.5em;
`

const SectionTitle = styled.h4`
  margin-top: 1em;
  margin-bottom: 0.5em;
`

const List = styled.ul`
  margin: 0;
  padding-left: 1.5em;
`

const ListItem = styled.li`
  margin-bottom: 0.5em;
`

interface WorkExperienceProps {
  companyName: string
  companyLink: string
  dates: string
  responsibilities: string[]
  skills: string[]
}

export function WorkExperience({
  companyName,
  companyLink,
  dates,
  responsibilities,
  skills,
}: WorkExperienceProps) {
  return (
    <div>
      <Company>
        <a href={companyLink} target="_blank" rel="noopener noreferrer">
          {companyName}
        </a>
      </Company>
      <Dates>{dates}</Dates>
      <SectionTitle>Responsibilities:</SectionTitle>
      <List>
        {responsibilities.map((responsibility, index) => (
          <ListItem key={index}>{responsibility}</ListItem>
        ))}
      </List>
      <SectionTitle>Skills:</SectionTitle>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>{skill}</ListItem>
        ))}
      </List>
    </div>
  )
} 