import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from "./sections/AboutPage.tsx";
import SkillsPage from "./sections/SkillsPage.tsx";
import ProjectPage from "./sections/ProjectPage.tsx";
import GetInTouchPage from "./sections/GetInTouchPage.tsx";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import HomePage from "./sections/HomePage.tsx";
import LoadingPage from "./sections/LoadingPage.tsx";
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate loading delay
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <BrowserRouter>
            <Analytics />
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
