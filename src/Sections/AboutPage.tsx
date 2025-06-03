import React from 'react';
import Title from "../Components/Title.tsx";
import AboutCard from "../Components/AboutCard.tsx";

const AboutPage:React.FC = () => {
    return (
        <section className="w-full min-h-screen pt-[80px] flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4 sm:px-6 lg:px-10 py-12 bg-white dark:bg-black transition-colors">
            <Title title={'About Me'}/>
            <div>
                <AboutCard/>
                <AboutCard/>
                <AboutCard/>
            </div>
        </section>
    );
};

export default AboutPage;