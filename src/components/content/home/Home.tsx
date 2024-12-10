import React from "react";
import {
    Highlight,
    HomeContainer,
    WelcomeText,
    BottomSection,
    Description,
    NavItemHighlight
} from "./home.styles";

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <WelcomeText>
                Welcome to <Highlight>Serge Hall's Portfolio</Highlight>
            </WelcomeText>
            <BottomSection>
                <Description>
                    &emsp;Hello, I am <strong>Serge</strong>, a passionate and dedicated student developer currently honing
                    my skills in both front-end and back-end development. I am proud to be part of a dynamic learning program
                    at{" "}
                    <NavItemHighlight
                        href="https://it-incubator.io/en"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>IT-Incubator</strong>
                    </NavItemHighlight>, where I am building a comprehensive foundation in modern web technologies.
                </Description>
                <Description>
                    &emsp;My journey in the technology industry is in its early stages, but I have already gained valuable
                    hands-on experience working on projects from scratch, applying the knowledge and best practices taught
                    by seasoned professionals.
                </Description>
                <Description>
                    &emsp;I am actively broadening my expertise in technologies such as <strong>React, Node.js, Express,
                    NestJS, MongoDB, PostgreSQL,</strong> and modern architectural patterns like <strong>SOLID, Hexagonal
                    Architecture,</strong> and <strong>SAGA.</strong> My ongoing learning includes{" "}
                    <strong>Microservices, RabbitMQ, WebSocket,</strong> and <strong>DevOps fundamentals,</strong>
                    including Docker, Kubernetes, and Jenkins.
                </Description>
                <Description>
                    &emsp;You can explore my work on{" "}
                    <NavItemHighlight
                        href="https://github.com/sergehall"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>GitHub</strong>
                    </NavItemHighlight> and track my progress on{" "}
                    <NavItemHighlight
                        href="https://www.codewars.com/users/SergeHall"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Codewars</strong>
                    </NavItemHighlight>.
                </Description>
                <Description>
                    &emsp;As a professional photographer, I bring creativity and attention to detail to all aspects of
                    my work. You can view my photography portfolio at{" "}
                    <NavItemHighlight
                        href="https://www.sergioartg.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>sergioartg.com</strong>
                    </NavItemHighlight> or follow my creative journey on Instagram at{" "}
                    <NavItemHighlight
                        href="https://www.instagram.com/sergioartg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>@sergioartg</strong>
                    </NavItemHighlight>.
                </Description>
                <Description>
                    &emsp;I am enthusiastic about contributing to impactful real-world projects, whether by joining a
                    professional team or collaborating with driven and like-minded developers. My ultimate goal is to
                    grow continuously as a developer, leveraging the power of teamwork and innovation to deliver
                    meaningful and lasting solutions.
                </Description>
            </BottomSection>
        </HomeContainer>
    );
};

export default Home;