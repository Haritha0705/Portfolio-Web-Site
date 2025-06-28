import React from 'react';
import Title from "../components/Title.tsx";
import AboutCard from "../components/AboutCard.tsx";
import { Code, GraduationCap } from "lucide-react";
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
    return (
        <section id="about" className="w-full min-h-screen pt-[80px] px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 2xl:px-48 bg-white dark:bg-black transition-colors duration-300 font-sans">
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center">
                <Title title="About Me" />
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-base sm:text-lg">
                    Get to know my background, principles, and experience.
                </p>
            </motion.div>

            {/* About Cards */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-center gap-6 items-stretch mt-12">
                <AboutCard
                    icon={<Code className="text-blue-600 dark:text-blue-500" size={40} />}
                    title="My Approach"
                    text={`I focus on building efficient, secure, and user-friendly applications by understanding real user needs. I write clean, maintainable code and follow modern development best practices. Whether working on frontend or backend, I aim for scalable and reliable solutions.

I’m always learning new technologies and improving my skills to deliver high-quality results. For me, development is about creating impactful solutions and growing with every project.`}
                />
                <AboutCard
                    icon={<GraduationCap className="text-blue-600 dark:text-blue-500" size={40} />}
                    title="Education"
                    text={`• School\nSt. Aloysius' College\n2008 – 2022
                        
                        • Foundation in Software Engineering
                        Informatics Institute of Technology (IIT Campus)
                        Sep 2023 – Sep 2024
                        
                        • BEng (Hons) Software Engineering
                        University of Westminster
                        Jan 2025 – Sep 2028`}
                />

            </motion.div>

            {/* Developer Bio */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-14 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-500 mb-4">
                    Who am I?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line tracking-wide">
                    My name is Haritha Wickremesinghe. I’m a 22-year-old fullstack developer and a passionate tech explorer currently studying at the University of Westminster. I specialize in building modern web and mobile applications using the latest technologies.
                    On the frontend, I focus on creating clean user interfaces, seamless user experiences, and performance-driven applications. On the backend, I develop RESTful APIs, build scalable architectures, and prioritize secure solutions.
                    As a mobile developer, I enjoy designing and building responsive, high-quality mobile apps. I’m always learning, experimenting, and exploring new tools, frameworks, and ideas to stay ahead in the tech world.
                    Whether it's a web app, a mobile solution, or a full-stack system, I’m always ready to build something impactful.
                </p>
            </motion.div>
        </section>
    );
};

export default AboutPage;
