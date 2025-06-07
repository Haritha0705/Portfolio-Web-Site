import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from "./Sections/HomePage.tsx";
import AboutPage from "./Sections/AboutPage.tsx";
import SkillsPage from "./Sections/SkillsPage.tsx";
import ProjectPage from "./Sections/ProjectPage.tsx";
import GetInTouchPage from "./Sections/GetInTouchPage.tsx";
import NotFoundPage from "./Sections/NotFoundPage.tsx";
import NavBar from "./Components/NavBar.tsx";
import Footer from "./Components/Footer.tsx";
import HomeNew from "./Sections/HomeNew.tsx";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
                <NavBar/>
                <main>
                    {/*className={'pt-[70px]'}*/}
                    <HomePage />
                    <AboutPage />
                    <SkillsPage />
                    <ProjectPage />
                    <GetInTouchPage />
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
        // <>
        //     <NavBar/>
        //     <HomePage />
        //     <AboutPage />
        //     <SkillsPage />
        //     <ProjectPage />
        //     <GetInTouchPage />
        //     <Footer/>
        // </>

    );
};

export default App;
