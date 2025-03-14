'use client'

import styled from 'styled-components'

const Title = styled.h1`
  margin-bottom: 2em;
`

const EducationItem = styled.div`
  margin-bottom: 2em;
  padding: 1.5em;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const University = styled.h2`
  margin-bottom: 0.5em;
  color: #333;
`

const Years = styled.h3`
  margin-bottom: 1em;
  color: #666;
`

const Degree = styled.p`
  line-height: 1.6;
  color: #444;
`

export default function Education() {
  return (
    <div>
      <Title>Education</Title>
      <EducationItem>
        <University>Kharkiv Polytechnic Institute</University>
        <Years>2022-2023</Years>
        <Degree>Masters degree, Cybersecurity</Degree>
      </EducationItem>
      <EducationItem>
        <University>Kharkiv Polytechnic Institute</University>
        <Years>2012-2017</Years>
        <Degree>Masters degree, Computer Engineering/System Programming</Degree>
      </EducationItem>
      <EducationItem>
        <University>Kharkiv Patent Computer College</University>
        <Years>2008-2012</Years>
        <Degree>Junior Engineer, PC and network configuration</Degree>
      </EducationItem>
    </div>
  )
} 