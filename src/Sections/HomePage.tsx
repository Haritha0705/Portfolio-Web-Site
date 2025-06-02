import React from 'react';
import MainImg from "../assets/IMG_3463.jpg";
import Button from "../Components/Button.tsx";
import { Github, Linkedin ,ArrowRight,Download} from "lucide-react";
import {Link} from "react-router-dom";

const HomePage: React.FC = () => {
    const handleContactClick = () => {
        // Example scroll or navigation
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };

    const handleProjectsClick = () => {
        const projectsSection = document.getElementById("projects");
        projectsSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="w-full min-h-screen pt-[80px] flex flex-col-reverse md:flex-row justify-center items-center gap-10 px-6 py-12 bg-white dark:bg-black transition-colors">

            {/* Text Section */}
            <div className="max-w-xl text-center md:text-left space-y-10">
                <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-white leading-tight">
                    Hi, I'm <span className="text-blue-500">Haritha Wikramasinha</span>
                </h1>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    Full Stack Web Developer
                </h3>
                <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400">
                    I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and high-performance applications.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button
                        text="View my work "
                        bgColor="bg-blue-500"
                        onClick={handleContactClick}
                        className="text-white justify-between gap-5 items-center flex"
                        icon={<ArrowRight/>}
                    />
                    <Button
                        text="Download CV "
                        bgColor="bg-white dark:bg-gray-800  "
                        onClick={handleProjectsClick}
                        className="justify-between gap-5 items-center flex border border-blue-500 text-blue-500 dark:"
                        icon={<Download/>}
                    />
                </div>

                <div className="flex gap-5 justify-center md:justify-start mt-4">
                    <Link to={'https://github.com/your-username'} target={"_blank"} rel={"noopener noreferrer"}>
                        <Github size={30} className="text-black dark:text-white hover:text-blue-500 cursor-pointer transition" />
                    </Link>
                    <Link to={'https://github.com/your-username'} target={"_blank"} rel={"noopener noreferrer"}>
                        <Linkedin size={30} className="text-black dark:text-white hover:text-blue-500 cursor-pointer transition" />
                    </Link>

                </div>
            </div>

            {/* Image Section */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
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
