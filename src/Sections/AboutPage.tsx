import React from 'react';
import Title from "../Components/Title.tsx";
import AboutCard from "../Components/AboutCard.tsx";
import { Code,GraduationCap,LucideShoppingBag } from "lucide-react";

const AboutPage: React.FC = () => {
    return (
        <section className="w-full min-h-screen pt-[80px] flex flex-col justify-around px-72 bg-white dark:bg-black transition-colors">
            <Title title={'About Me'} />

            <div className="flex flex-col md:flex-row justify-center gap-6 items-stretch mt-10">
                <AboutCard icon={<Code color={'blue'} size={40}/>} text={'I believe in clean, readable code and user-centered design.My goal is to create applications that are not only functional but also intuitive and enjoyable to use. I\'m passionate about web standards, accessibility, and performance optimization.'} title={'My Approach'}/>
                <AboutCard icon={<GraduationCap color={'blue'} size={40}/>} text={'BSc in Computer Science \nUniversity of Technology \n2015 - 2019 \nFull Stack Web Development \nTech Bootcamp \n2020'} title={'Education'}/>
                <AboutCard icon={<LucideShoppingBag color={'blue'} size={40}/>} text={'Senior Frontend Developer \nTechCorp Inc.\n2021 - Present \nWeb Developer \nDigital Solutions Agency \n2019 - 2021'} title={'Experience'}/>
            </div>

            <div className="mt-10 flex justify-center items-start bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-black dark:text-white text-lg max-w-6xl">
                    I'm a passionate full-stack developer with over 5 years of experience building web applications.
                    I specialize in JavaScript, React, Node.js, and modern web technologies. My journey in web
                    development began during my computer science studies, and I've been in love with creating for
                    the web ever since. When I'm not coding, you can find me hiking, reading tech blogs, or
                    experimenting with new frameworks and tools. I'm always eager to learn and grow as a developer.
                </p>
            </div>
        </section>
    );
};

export default AboutPage;
