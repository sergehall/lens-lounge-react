// src/App.tsx

import React from "react";
import { PageTitles } from "./config/page-titles";
import { techLinks } from "./config/technology-links";
import { navLinks } from "./config/nav-links";
import ImageBannerContent from "./assets/images/image-banner-content.png";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import ImageBanner from "./components/content/Image-banner-content";
import Technologies from "./components/content/technologies/Technologies";
import ExampleUserProfile from "./components/content/profile/example-user-profile";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header title={PageTitles.HOME} className="App-header" />

            <nav className="App-nav">
                <Sidebar links={navLinks} className="Sidebar" />
            </nav>

            <div className="App-content">
                <ImageBanner imageUrl={ImageBannerContent} className="Image-banner-content" altText="Banner Image" />
                {/*<Profile />*/}
                {/* UserProfile component as a standalone example */}
                <ExampleUserProfile />

                <Technologies technologies={techLinks} className="Technologies" />
            </div>
        </div>
    );
};

export default App;
