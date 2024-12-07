import React from "react";
import { PageTitles } from "./config/page-titles";
import { navLinks } from "./config/nav-links";
import ImageBannerContent from "./assets/images/image-banner-content.png";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Technologies from "./components/content/technologies/Technologies";
import {techLinks} from "./config/technology-links";
import ExampleUserProfile from "./components/content/profile/example-user-profile";
import MyPosts, {postsDataMock} from "./components/content/my-posts/My-posts";
import Dialogs from "./components/content/dialogs/Dialogs";
import {dialogsData} from "./components/content/dialogs/dialogs-data-mock/dialogs-data-mock";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router";
import PageLayout from "./layouts/pageLayout";
import Home from "./components/content/home/Home";
import News from "./components/news/News";
import About from "./components/about/About";
import Contact from "./components/content/contact/Contact";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header title={PageTitles.HOME} className="App-header" />

                <nav className="App-nav">
                    <Sidebar links={navLinks} className="Sidebar" />
                </nav>

                <div className="App-content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PageLayout
                                    bannerImage="/path/to/home-banner.jpg"
                                    summaryDescription="Welcome to the homepage of our app."
                                >
                                    <Home />
                                </PageLayout>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <PageLayout
                                    bannerImage={ImageBannerContent}
                                    summaryDescription="This is the profile page summary."
                                >
                                    <ExampleUserProfile />
                                </PageLayout>
                            }
                        />
                        <Route
                            path="/messages"
                            element={
                                <PageLayout
                                    bannerImage={ImageBannerContent}
                                    summaryDescription="Your messages and chats."
                                >
                                    <Dialogs dialogs={dialogsData} />
                                </PageLayout>
                            }
                        />
                        <Route
                            path="/messages"
                            element={
                                <PageLayout
                                    bannerImage={ImageBannerContent}
                                    summaryDescription="Explore posts shared by users."
                                >
                                    <MyPosts posts={postsDataMock} />
                                </PageLayout>
                            }
                        />
                        <Route
                            path="/news"
                            element={
                                <PageLayout
                                    bannerImage="/path/to/news-banner.jpg"
                                    summaryDescription="Stay updated with the latest news."
                                >
                                    <News />
                                </PageLayout>
                            }
                        />
                        <Route
                            path="/technologies"
                            element={
                                <PageLayout
                                    bannerImage={ImageBannerContent}
                                    summaryDescription="Learn about cutting-edge technologies."
                                >
                                    <Technologies technologies={techLinks} className="Technologies" />
                                </PageLayout>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <PageLayout
                                    bannerImage="/path/to/news-banner.jpg"
                                    summaryDescription="Stay updated with the latest news."
                                >
                                    <About />
                                </PageLayout>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <PageLayout
                                    bannerImage="/path/to/news-banner.jpg"
                                    summaryDescription="Stay updated with the latest news."
                                >
                                    <Contact />
                                </PageLayout>
                            }
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;