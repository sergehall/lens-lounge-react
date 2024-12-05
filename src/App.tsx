import React from "react";
import { PageTitles } from "./config/page-titles";
import { navLinks } from "./config/nav-links";
import ImageBannerContent from "./assets/images/image-banner-content.png";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import ImageBanner from "./components/content/Image-banner-content";
import Technologies from "./components/content/technologies/Technologies";
import ExampleUserProfile from "./components/content/profile/example-user-profile";
import MyPosts, {postsDataMock} from "./components/content/my-posts/my-posts";
import Content from "./components/content/Content";
import {DynamicTitle} from "./components/content/dynamic-title";



const App: React.FC = () => {
    return (
        <div className="App">
            <Header title={PageTitles.HOME} className="App-header" />

            <nav className="App-nav">
                <Sidebar links={navLinks} className="Sidebar" />
            </nav>

            <div className="App-content">
                <ImageBanner imageUrl={ImageBannerContent} className="Image-banner-content" altText="Banner Image" />
                {/*<Content title={<DynamicTitle />}></Content>*/}
                <ExampleUserProfile />
                <MyPosts posts={postsDataMock} />

                {/*<Technologies technologies={techLinks} className="Technologies" />*/}
            </div>
        </div>
    );
};

export default App;
