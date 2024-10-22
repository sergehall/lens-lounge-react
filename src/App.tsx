import React from 'react';
import Header from './components/Header/Header';
import { PageTitles } from "./config/titles";
import Technologies from "./components/Content/Technologies";
import {techLinks} from "./config/technology-links";
import Nav from "./components/Nav/Nav";
import {navLinks} from "./config/nav-links";
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Header title={PageTitles.HOME}/>
            </header>
            <nav className="App-nav">
                <Nav links={navLinks}/>
            </nav>
            <main className="App-content">
                <h2>Content</h2>
                <Technologies technologies={techLinks}/>
            </main>
        </div>
    );
};

export default App;
