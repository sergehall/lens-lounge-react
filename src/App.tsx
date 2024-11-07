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
import Profile from "./components/content/profile/Profile";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header title={PageTitles.HOME} className="App-header" />

            <nav className="App-nav">
                <Sidebar links={navLinks} className="Sidebar" />
            </nav>

            <div className="App-content">
                <ImageBanner imageUrl={ImageBannerContent} className="Image-banner-content" altText="Banner Image" />

                {/* Profile component with example data */}
                <Profile
                    className="Profile"
                    firstName="Serge"
                    lastName="Hall"
                    birthday="January 1, 1990"
                    education="Bachelor's in Computer Science"
                    website="https://sergioartg.com"
                    photoUrl="https://avatars.githubusercontent.com/u/60080971?s=400&u=142534052d9a95da0103bb0094b44d5202f90a21&v=4"
                />

                <Technologies technologies={techLinks} className="Technologies" />
            </div>
        </div>
    );
};

export default App;
