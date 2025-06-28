import React from 'react';
import MainImg from "../assets/IMG_0415.jpg";
import Button from "../components/Button.tsx";
import { Github, Linkedin , ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
    const handleProjectsClick = () => {
        const contactSection = document.getElementById("project");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <section id="home" className="w-full min-h-screen pt-[80px] flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4 sm:px-6 lg:px-10 py-12 bg-white dark:bg-black transition-colors">

            {/* Text Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 text-center md:text-left space-y-6 sm:space-y-8">
                <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-black dark:text-white leading-tight">
                    Hi, I'm <span className="text-blue-600 dark:text-blue-500 font-display">Haritha Wickremesinghe</span>
                </h1>

                <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
                    Full Stack Developer
                </h3>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                    I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and high-performance applications.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button
                        text="View my work"
                        bgColor="bg-blue-600 dark:bg-blue-500"
                        onClick={handleProjectsClick}
                        className="text-white dark:text-gray-100 justify-between gap-3 items-center flex"
                        icon={<ArrowRight />}
                    />
                    <a href="https://drive.google.com/file/d/14ls8whTLtdx-XYHVhMI7JNqiFfN-4eRd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button
                            text="Download CV"
                            bgColor="bg-white dark:bg-gray-800"
                            className="justify-between gap-3 items-center flex border border-blue-600 dark:border-blue-500 text-blue-600  dark:text-blue-500"
                            icon={<Download />}
                        />
                    </a>
                </div>

                <div className="flex gap-5 justify-center md:justify-start mt-4">
                    <div className="flex items-center gap-4">
                        <Link to={'https://github.com/Haritha0705'} target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full hover:scale-105 transition-transform">
                            <Github className="text-gray-600 dark:text-gray-300" />
                        </Link>
                        <Link to={'https://www.linkedin.com/in/haritha-wikramasinha-11ab05271/'} target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full hover:scale-105 transition-transform">
                            <Linkedin className="text-gray-600 dark:text-gray-300" />
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-100 lg:h-100 rounded-full overflow-hidden shadow-xl">
                <img
                    src={MainImg}
                    loading="lazy"
                    alt="Haritha Wikramasinha"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </section>
    );
};

export default HomePage;
