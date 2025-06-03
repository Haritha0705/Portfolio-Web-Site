import React from 'react';
import { Code } from "lucide-react";

const AboutCard:React.FC = () => {
    return (
        <div className={'flex flex-col max-w-sm bg-gray-200 items-start py-12 px-10 gap-5'}>
            <Code color={'blue'} size={40}/>
            <h4 className={'text-black dark:text-white text-xl font-semibold'}>My Approach</h4>
            <p className={'text-black dark:text-white text-lg'}>I believe in clean, readable code and user-centered design.My goal is to create applications that are not only functional but also intuitive and enjoyable to use.I'm passionate about web standards, accessibility, and performance optimization.</p>
        </div>
    );
};

export default AboutCard;