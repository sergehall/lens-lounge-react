import React from "react";
import {
    NewsContainer,
    Title,
    ArticleList,
    ArticleItem,
    ArticleLink,
    ArticleTitle,
    ArticleText,
} from "./news.styles";
import {NewArticles} from "./newsArticlesMock";

export interface NewArticlesProps {
    newArticles: NewArticles[];
}


const News: React.FC<NewArticlesProps> = ({newArticles}) => {
    return (
        <NewsContainer>
            <Title>Latest News</Title>
            <ArticleList>
                {newArticles.map((article) => (
                    <ArticleItem key={article.id}>
                        <ArticleLink href={article.link} target="_blank" rel="noopener noreferrer">
                            <ArticleTitle>{article.title}</ArticleTitle>
                            <ArticleText>{article.content}</ArticleText>
                        </ArticleLink>
                    </ArticleItem>
                ))}
            </ArticleList>
        </NewsContainer>
    );
};

export default News;