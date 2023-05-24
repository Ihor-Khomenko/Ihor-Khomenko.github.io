// Portfolio.js
import React from 'react';
import styled from 'styled-components';

const PortfolioItem = styled.div`
  margin-bottom: 1em;
`;

const ProjectName = styled.h2`
  // add styles here
`;

const Role = styled.h3`
  // add styles here
`;

const Description = styled.p`
  // add styles here
`;

function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
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
            <PortfolioItem>
                <ProjectName>IT Loyalty</ProjectName>
                <Role>QA Engineer</Role>
                <Description>
                    It's is a platform for members of the Kharkiv IT cluster, offering a range of city-hacks and a discount system. As a Manual QA Engineer for IT Loyalty, I conducted comprehensive tests, including iOS and Android app testing, API testing, load testing, and web testing. I also played a key role in creating test documentation.
                </Description>
            </PortfolioItem>
            <PortfolioItem>
                <ProjectName>Meringue</ProjectName>
                <Role>QA Engineer</Role>
                <Description>
                    It is a comprehensive web service designed for managing mobile push notifications for company products. Along with calendar management and point-of-interest descriptions, it offers messaging functionality. As a manual QA, I conducted rigorous web and API testing, focusing on testing notifications, performing performance tests, and stress tests.
                </Description>
            </PortfolioItem>
            <PortfolioItem>
                <ProjectName>Ruben</ProjectName>
                <Role>QA Engineer</Role>
                <Description>
                    A Glovo-like mobile application for the Swiss market for the delivery of medicines and products. I did mobile testing and API testing.
                </Description>
            </PortfolioItem>
            <PortfolioItem>
                <ProjectName>State project on public procurement</ProjectName>
                <Role>QA Engineer</Role>
                <Description>
                    As a Manual QA Engineer, I tested an electronic platform for public procurement. It facilitates transparent purchasing, enabling government organizations to buy goods, services, and works. I conducted manual testing of the web app, including database and API testing. The platform aims to streamline procurement, promote fair competition, and ensure accountability in public fund utilization.
                </Description>
            </PortfolioItem>
        </div>
    );
}

export default Portfolio;
