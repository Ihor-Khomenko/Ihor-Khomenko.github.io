// Education.js
import React from 'react';
import styled from 'styled-components';

const EducationItem = styled.div`
  margin-bottom: 1em;
`;

const University = styled.h2`
  // add styles here
`;

const Years = styled.h3`
  // add styles here
`;

const Degree = styled.p`
  // add styles here
`;

function Education() {
    return (
        <div>
            <h1>Education</h1>
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
    );
}

export default Education;
