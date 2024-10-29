import React from 'react';
import Header from './components/header/header';
import { PageTitles } from "./config/page-titles";
import ImageBanner from './components/content/image-banner-content';
import Technologies from './components/content/technologies';
import { techLinks } from "./config/technology-links";
import { navLinks } from './config/nav-links';
import ImageBannerContent from '../src/assets/images/image-banner-content.png';
import Sidebar from "./components/sidebar/sidebar";
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Header title={PageTitles.HOME} />
            </header>
            <nav className="App-nav">
                <Sidebar links={navLinks} className = "App-nav"/>
            </nav>
            <div className="App-content">
                <ImageBanner imageUrl={ImageBannerContent} className="Image-banner-content" altText="Banner Image" />
                <Technologies technologies={techLinks}  className="Technologies"/>
            </div>
        </div>
    );
};

export default App;
