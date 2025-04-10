import React from "react";
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
import { NewArticles } from "./mocks/newsArticlesMock";

export interface NewArticlesProps {
    newArticles: NewArticles[];
}

const News: React.FC<NewArticlesProps> = ({ newArticles }) => {
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

export default News;

// import React from "react";
// import {
//     NewsContainer,
//     Title,
//     ArticleList,
//     ArticleItem,
//     ArticleLink,
//     ArticleTitle,
//     ArticleText,
// } from "./news.styles";
// import {NewArticles} from "./newsArticlesMock";
//
// export interface NewArticlesProps {
//     newArticles: NewArticles[];
// }
//
//
// const News: React.FC<NewArticlesProps> = ({newArticles}) => {
//     return (
//         <NewsContainer>
//             <Title>Latest News</Title>
//             <ArticleList>
//                 {newArticles.map((article) => (
//                     <ArticleItem key={article.id}>
//                         <ArticleLink href={article.link} target="_blank" rel="noopener noreferrer">
//                             <ArticleTitle>{article.title}</ArticleTitle>
//                             <ArticleText>{article.content}</ArticleText>
//                         </ArticleLink>
//                     </ArticleItem>
//                 ))}
//             </ArticleList>
//         </NewsContainer>
//     );
// };
//
// export default News;