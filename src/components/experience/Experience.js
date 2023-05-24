// Experience.js
import React from 'react';
import WorkExperience from './WorkExperience';

function Experience() {
    return (
        <div>
            <h1>Experience</h1>
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
            <WorkExperience
                companyName="Agilites"
                companyLink="https://www.agilites.com/"
                dates="January 2018 - January 2019"
                responsibilities={[
                    "Writing test documentation",
                    "Test Design, Bug reports (Jira), test cases (Testlink), check lists",
                    "Find, submit, and track defects found during testing to ensure that they are resolved",
                    "Functional testing, Regression testing, Smoke and Sanity testing, Integration testing, Specification testing",
                    "Creating log files (Putty, WinSCP, Kibana)",
                    "Reproducing incidents from users and providing support",
                    "Work with SQL databases (updating info, finding the required data)"
                ]}
                skills={[
                    "REST APIs",
                    "Test Cases",
                    "Manual Testing",
                    "SQL",
                    "Black Box Testing"
                ]}
            />
        </div>
    );
}

export default Experience;
