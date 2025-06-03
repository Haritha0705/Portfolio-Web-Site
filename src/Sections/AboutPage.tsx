import React from 'react';
import Title from "../Components/Title.tsx";
import AboutCard from "../Components/AboutCard.tsx";


const AboutPage:React.FC = () => {
    return (
        <section className="w-full min-h-screen  pt-[80px] flex flex-col  gap-10 px-4  bg-white dark:bg-black transition-colors">
            <Title title={'About Me'}/>

            <div className={'flex justify-evenly'}>
                <AboutCard/>
                <AboutCard/>
                <AboutCard/>
            </div>
            <div className={'flex justify-center items-start'}>
                <p></p>
            </div>
        </section>
    );
};

export default AboutPage;