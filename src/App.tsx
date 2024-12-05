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
import MyPosts, {postsData} from "./components/content/my-posts/my-posts";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header title={PageTitles.HOME} className="App-header" />

            <nav className="App-nav">
                <Sidebar links={navLinks} className="Sidebar" />
            </nav>

            <div className="App-content">
                <ImageBanner imageUrl={ImageBannerContent} className="Image-banner-content" altText="Banner Image" />
                <ExampleUserProfile />
                <MyPosts posts={postsData} />

                {/*<Technologies technologies={techLinks} className="Technologies" />*/}
            </div>
        </div>
    );
};

export default App;
