import React from 'react';
import Header from './components/Header/Header';
import { navLinks } from "./config/nav-links"; // Ensure the path is correct based on your file structure
import { PageTitles } from "./config/titles";
import Technologies from "./components/Technologies/Technologies";
import {techLinks} from "./config/technology-links";

const App: React.FC = () => {
    return (
        <div>
            <Header title={PageTitles.HOME} links={navLinks} />
            <Technologies technologies={techLinks} />
        </div>
    );
};

export default App;
