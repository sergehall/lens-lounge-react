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
import MyPosts, {postsDataMock} from "./components/content/my-posts/my-posts";
import Summarize from "./components/content/summarize/Summarize";
import {DynamicTitle} from "./components/content/summarize/dynamic-title";
import Dialogs from "./components/content/dialogs/dialogs";
import {dialogsData} from "./components/content/dialogs/dialogs-data-mock/dialogs-data-mock";
import ImageBanner from "./components/content/image-banner-content/Image-banner-content";



const App: React.FC = () => {
    return (
        <div className="App">
            <Header title={PageTitles.HOME} className="App-header" />

            <nav className="App-nav">
                <Sidebar links={navLinks} className="Sidebar" />
            </nav>

            <div className="App-content">
                <ImageBanner imageUrl={ImageBannerContent} className="Image-banner-content" altText="Banner Image" />
                <Summarize
                    title={<DynamicTitle />}
                    imageUrl="https://avatars.githubusercontent.com/u/87441904?s=200&v=4"
                    description="Summarize description..."
                />
                <ExampleUserProfile />
                <MyPosts posts={postsDataMock} />
                <Dialogs dialogs={dialogsData} />

                {/* Uncomment if Technologies component is needed */}
                {/* <Technologies technologies={techLinks} className="Technologies" /> */}
            </div>
        </div>
    );
};

export default App;
