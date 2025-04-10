import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newArticlesMock, NewArticles } from "./mocks/newsArticlesMock";
import { RootState } from "../../app/store";

interface NewsPageState {
    articles: NewArticles[];
}

const initialState: NewsPageState = {
    articles: newArticlesMock,
};

const newsPageSlice = createSlice({
    name: "newsPage",
    initialState,
    reducers: {
        resetArticles: (state) => {
            state.articles = newArticlesMock;
        },

        addArticle: (state, action: PayloadAction<NewArticles>) => {
            state.articles.unshift(action.payload); // add to top
        },

        removeArticle: (state, action: PayloadAction<number>) => {
            state.articles = state.articles.filter(article => article.id !== action.payload);
        },

        updateArticle: (state, action: PayloadAction<NewArticles>) => {
            const index = state.articles.findIndex(article => article.id === action.payload.id);
            if (index !== -1) {
                state.articles[index] = action.payload;
            }
        },
    },
});

// Selectors
export const selectNewsArticles = (state: RootState): NewArticles[] =>
    state.newsPage.articles;

// Actions
export const {
    resetArticles,
    addArticle,
    removeArticle,
    updateArticle,
} = newsPageSlice.actions;


export default newsPageSlice.reducer;
