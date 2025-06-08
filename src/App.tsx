import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from "./Sections/HomePage.tsx";
import AboutPage from "./Sections/AboutPage.tsx";
import SkillsPage from "./Sections/SkillsPage.tsx";
import ProjectPage from "./Sections/ProjectPage.tsx";
import GetInTouchPage from "./Sections/GetInTouchPage.tsx";
import NavBar from "./Components/NavBar.tsx";
import Footer from "./Components/Footer.tsx";



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


    );
};

export default App;
