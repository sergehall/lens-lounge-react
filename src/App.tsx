import React from 'react';
import Header from './components/Header/Header';
import { PageTitles } from "./config/page-titles";
import ImageBanner from './components/Content/ImageBannerContent';
import Technologies from './components/Content/Technologies';
import { techLinks } from "./config/technology-links";
import Nav from './components/Nav/Nav';
import { navLinks } from './config/nav-links';
import './App.css';
import ImageBannerContent from '../src/assets/images/image-banner-content.png';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Header title={PageTitles.HOME} />
            </header>
            <nav className="App-nav">
                <Nav links={navLinks} />
            </nav>
            <div className="App-content">
                <ImageBanner imageUrl={ImageBannerContent} className="Image-banner-content" altText="Banner Image" />
                <Technologies technologies={techLinks}  className="Technologies"/>
            </div>
        </div>
    );
};

export default App;
