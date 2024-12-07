import React from "react";
import styles from "./home.module.css";
import { Highlight, HomeContainer, WelcomeText } from "./home.styles";

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <WelcomeText>
                Welcome to <Highlight>Serge Hall's Portfolio</Highlight>
            </WelcomeText>
            <p className={styles.description}>
                Hi, I’m <strong>Serge</strong>, a passionate and dedicated student developer currently honing my skills
                in both front-end and back-end development. I’m proud to be part of a dynamic learning program at{" "}
                <a href="https://it-incubator.io" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    IT-Incubator
                </a>, where I’m building a solid foundation in modern web technologies.
            </p>
            <p className={styles.description}>
                My journey in the tech industry is just beginning, but I’ve already gained hands-on experience working
                on projects from scratch, applying the knowledge and best practices taught by industry professionals.
            </p>
            <p className={styles.description}>
                I am actively expanding my expertise in <strong>React, Node.js, Express, NestJS, MongoDB, PostgreSQL, </strong>
                and modern architectural patterns like <strong>SOLID, Hexagonal Architecture,</strong> and <strong>SAGA.</strong>
                My learning also extends to <strong>Microservices, RabbitMQ, WebSocket,</strong> and <strong>DevOps basics</strong>,
                including Docker, Kubernetes, and Jenkins.
            </p>
            <p className={styles.description}>
                In addition to my technical journey, I am building my coding skills through challenges and contributions.
                You can explore my work on GitHub at{" "}
                <a href="https://github.com/sergehall" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    SergeHall
                </a> and follow my problem-solving progress on{" "}
                <a href="https://www.codewars.com/users/SergeHall" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Codewars
                </a>.
            </p>
            <p className={styles.description}>
                As a professional photographer, I bring creativity and attention to detail to all aspects of my work.
                You can view my photography portfolio at{" "}
                <a href="https://www.sergioartg.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    sergioartg.com
                </a> or follow my creative journey on Instagram at{" "}
                <a href="https://www.instagram.com/sergioartg" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    @sergioartg
                </a>.
            </p>
            <p className={styles.description}>
                I am eager to contribute to real-world projects, either by joining a professional team or collaborating
                with like-minded developers. My goal is to continuously grow as a developer, leveraging teamwork and
                innovation to create impactful solutions.
            </p>
        </HomeContainer>
    );
};

export default Home;
