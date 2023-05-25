import React from 'react';
import styled from 'styled-components';

const Company = styled.h2`

`;

const Dates = styled.h3`

`;

const Responsibilities = styled.ul`

`;

const Skills = styled.ul`

`;

function WorkExperience({ companyName, companyLink, dates, responsibilities, skills }) {
    return (
        <div>
            <Company><a href={companyLink}>{companyName}</a></Company>
            <Dates>{dates}</Dates>
            <h4>Responsibilities:</h4>
            <Responsibilities>
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </Responsibilities>
            <h4>Skills:</h4>
            <Skills>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </Skills>
        </div>
    );
}

export default WorkExperience;
