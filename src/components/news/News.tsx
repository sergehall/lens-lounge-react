import React from "react";
import styles from "./news.module.css";
import { NewsContainer, Title, Article } from "./news.styles";

const newsArticles = [
    { id: 1, title: "It-incubator.io: Full-stack Solutions", content: "It-incubator specializes in both frontend and backend development.", link: "https://it-incubator.io/news" },
    { id: 2, title: "Breaking News: React is Awesome!", content: "React is gaining more popularity in 2024...", link: "https://reactjs.org" },
    { id: 3, title: "Styled Components: Best Practices", content: "Learn how to use styled-components efficiently...", link: "https://styled-components.com" },
    { id: 4, title: "CSS Modules vs Styled Components", content: "Which one should you use and why?", link: "https://css-tricks.com" },
];

const News: React.FC = () => {
    return (
        <NewsContainer>
            <Title>Latest News</Title>
            <ul className={styles.articleList}>
                {newsArticles.map((article) => (
                    <li key={article.id} className={styles.articleItem}>
                        <a href={article.link} target="_blank" rel="noopener noreferrer" className={styles.articleLink}>
                            <Article>
                                <h3 className={styles.articleTitle}>{article.title}</h3>
                                <p className={styles.articleText}>{article.content}</p>
                            </Article>
                        </a>
                    </li>
                ))}
            </ul>
        </NewsContainer>
    );
};

export default News;
