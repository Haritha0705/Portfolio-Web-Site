import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from "./Sections/AboutPage.tsx";
import SkillsPage from "./Sections/SkillsPage.tsx";
import ProjectPage from "./Sections/ProjectPage.tsx";
import GetInTouchPage from "./Sections/GetInTouchPage.tsx";
import NavBar from "./Components/NavBar.tsx";
import Footer from "./Components/Footer.tsx";
import HomePage from "./Sections/HomePage.tsx";
import LoadingPage from "./Sections/LoadingPage.tsx";

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate loading delay
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
                <NavBar />
                <main>
                    <HomePage />
                    <AboutPage />
                    <SkillsPage />
                    <ProjectPage />
                    <GetInTouchPage />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
