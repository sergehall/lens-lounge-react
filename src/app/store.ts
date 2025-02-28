import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navLinks } from "../config/nav-links";
import { postsDataMock } from "../features/my-posts/mocks/posts-data-mock";
import { chatsData } from "../features/whisper/chats/chats-data";
import { contactData } from "../features/whisper/contacts/contacts-data";
import { newArticlesMock } from "../features/news/news-articles-mock";
import logo from "../assets/images/logo.svg";
import { PageTitles } from "../config/page-titles";


// Define interfaces for type safety
interface SidebarState {
    navigationLinks: typeof navLinks;
}

interface HeaderState {
    title: string;
    logoUrl: string;
    homeUrl: string;
}

interface ShowcasePageState {
    userProfile: Record<string, unknown>; // Profile information with dynamic structure
    userPosts: typeof postsDataMock; // Mocked posts data
}

interface WhisperPageState {
    chatConversations: typeof chatsData; // List of chat conversations
    relatedPosts: typeof postsDataMock; // Posts related to chat
    contactList: typeof contactData; // Contact list
}

interface NewsPageState {
    articles: typeof newArticlesMock; // News articles
}

interface ContentState {
    homePageContent: Record<string, unknown>; // General home page content
    showcasePage: ShowcasePageState; // State for the showcase page
    whisperPage: WhisperPageState; // State for the whisper (chat) page
    newsPage: NewsPageState; // State for the news page
}

// **Create slice for header**

const headerSlice = createSlice({
    name: "header",
    initialState: { title: PageTitles.HOME, logoUrl: logo, homeUrl: "/" } satisfies HeaderState,
    reducers: {
        updateHeader: (state, action: PayloadAction<Partial<HeaderState>>) => {
            // Update title if provided
            if (action.payload.title) {
                state.title = action.payload.title as PageTitles;
            }
            // Update logo URL if provided
            if (action.payload.logoUrl) {
                state.logoUrl = action.payload.logoUrl;
            }
            // Update home URL if provided
            if (action.payload.homeUrl) {
                state.homeUrl = action.payload.homeUrl;
            }
        },
    },
});

// **Create slice for sidebar**

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: { navigationLinks: [...navLinks] } satisfies SidebarState,
    reducers: {
        updateLinks: (state, action: PayloadAction<typeof navLinks>) => {
            state.navigationLinks = action.payload; // Update navigation links
        },
    },
});

// **Create slice for content**

const contentSlice = createSlice({
    name: "content",
    initialState: {
        homePageContent: {}, // Empty object for home page content
        showcasePage: { userProfile: {}, userPosts: postsDataMock }, // Showcase page initial state
        whisperPage: { chatConversations: chatsData, relatedPosts: postsDataMock, contactList: contactData }, // Whisper page initial state
        newsPage: { articles: newArticlesMock }, // News page initial state
    } as ContentState,
    reducers: {
        updateShowcasePage: (state, action: PayloadAction<ShowcasePageState>) => {
            state.showcasePage = action.payload; // Update showcase page state
        },
    },
});

// **Configure Redux store**

export const store = configureStore({
    reducer: {
        header: headerSlice.reducer, // Reducer for header state
        sidebar: sidebarSlice.reducer, // Reducer for sidebar state
        content: contentSlice.reducer, // Reducer for content state
    },
});

// **Infer RootState and AppDispatch from the store**

export type RootState = ReturnType<typeof store.getState>; // Defines the structure of the Redux store state
export type AppDispatch = typeof store.dispatch; // Type for dispatching actions

// **Export actions**

export const { updateHeader } = headerSlice.actions; // Export header actions
export const { updateLinks } = sidebarSlice.actions; // Export sidebar actions
export const { updateShowcasePage } = contentSlice.actions; // Export content actions
