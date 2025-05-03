// src/features/news/NewsPage.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
    NewsContainer,
    Title,
    ArticleList,
    ArticleItem,
    ArticleLink,
    ArticleTitle,
    ArticleText,
    ArticleMeta,
} from "./news.styles";

/**
 * News component displays a list of latest articles from Redux store.
 */
const NewsPage: React.FC = () => {
    const newArticles = useSelector((state: RootState) => state.newsPage.articles);

    return (
        <NewsContainer>
            <Title>Latest News</Title>
            <ArticleList>
                {newArticles.map((article) => (
                    <ArticleItem key={article.id}>
                        <ArticleLink href={article.link} target="_blank" rel="noopener noreferrer">
                            <ArticleTitle>{article.title}</ArticleTitle>
                            <ArticleText>{article.content}</ArticleText>
                            <ArticleMeta>
                                <span>By {article.author}</span>
                                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                            </ArticleMeta>
                        </ArticleLink>
                    </ArticleItem>
                ))}
            </ArticleList>
        </NewsContainer>
    );
};

export default NewsPage;
