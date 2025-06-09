import React from 'react';
import Title from "../Components/Title.tsx";
import AboutCard from "../Components/AboutCard.tsx";
import { Code, GraduationCap, LucideShoppingBag } from "lucide-react";

const AboutPage: React.FC = () => {
    return (
        <section id="about" className="w-full min-h-screen pt-[80px] px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 2xl:px-48 bg-white dark:bg-black transition-colors duration-300 font-sans">
            {/* Title */}
            <div className="text-center">
                <Title title="About Me" />
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-base sm:text-lg">
                    Get to know my background, principles, and experience.
                </p>
            </div>

            {/* About Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-6 items-stretch mt-12">
                <AboutCard
                    icon={<Code className="text-blue-600 dark:text-blue-500" size={40} />}
                    title="My Approach"
                    text={`I believe in clean, readable code and user-centered design. My goal is to create applications that are not only functional but also intuitive and enjoyable to use. I'm passionate about web standards, accessibility, and performance optimization.`}
                />
                <AboutCard
                    icon={<GraduationCap className="text-blue-600 dark:text-blue-500" size={40} />}
                    title="Education"
                    text={`🎓 BSc in Computer Science\n🏫 University of Technology\n📅 2015 - 2019\n\n💻 Full Stack Bootcamp\n📍 Tech Academy\n📅 2020`}
                />
                <AboutCard
                    icon={<LucideShoppingBag className="text-blue-600 dark:text-blue-500" size={40} />}
                    title="Experience"
                    text={`🧑‍💻 Senior Frontend Developer\n🏢 TechCorp Inc.\n📅 2021 - Present\n\n🌐 Web Developer\n🏢 Digital Solutions Agency\n📅 2019 - 2021`}
                />
            </div>

            {/* Developer Bio */}
            <div className="mt-14 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-500 mb-4">
                    Who am I?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line tracking-wide">
                    I'm a passionate full-stack developer with over 5 years of experience building web applications.
                    I specialize in JavaScript, React, Node.js, and modern web technologies.

                    My journey in web development began during my computer science studies, and I've been in love
                    with creating for the web ever since. When I'm not coding, you can find me hiking, reading tech blogs,
                    or experimenting with new frameworks and tools.

                    I'm always eager to learn and grow as a developer.
                </p>
            </div>
        </section>
    );
};

export default AboutPage;
