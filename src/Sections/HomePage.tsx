import React from 'react';
import MainImg from "../assets/IMG_3463.jpg";
import Button from "../Components/Button.tsx";
import { Github, Linkedin, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    const handleContactClick = () => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };

    const handleProjectsClick = () => {
        const projectsSection = document.getElementById("projects");
        projectsSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="w-full min-h-screen pt-[80px] flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4 sm:px-6 lg:px-10 py-12 bg-white dark:bg-black transition-colors">

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6 sm:space-y-8">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white leading-tight">
                    Hi, I'm <span className="text-blue-500">Haritha Wikramasinha</span>
                </h1>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    Full Stack Web Developer
                </h3>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                    I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and high-performance applications.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button
                        text="View my work"
                        bgColor="bg-blue-500"
                        onClick={handleContactClick}
                        className="text-white justify-between gap-3 items-center flex"
                        icon={<ArrowRight />}
                    />
                    <Button
                        text="Download CV"
                        bgColor="bg-white dark:bg-gray-800"
                        onClick={handleProjectsClick}
                        className="justify-between gap-3 items-center flex border border-blue-500 text-blue-500"
                        icon={<Download />}
                    />
                </div>

                <div className="flex gap-5 justify-center md:justify-start mt-4">
                    <Link to={'https://github.com/your-username'} target="_blank" rel="noopener noreferrer">
                        <Github size={28} className="text-black dark:text-white hover:text-blue-500 transition" />
                    </Link>
                    <Link to={'https://linkedin.com/in/your-username'} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={28} className="text-black dark:text-white hover:text-blue-500 transition" />
                    </Link>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl">
                <img
                    src={MainImg}
                    alt="Haritha Wikramasinha"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default HomePage;
