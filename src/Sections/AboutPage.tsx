import React from 'react';

const AboutPage:React.FC = () => {
    return (
        <section className="w-full min-h-screen pt-[80px] flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4 sm:px-6 lg:px-10 py-12 bg-white dark:bg-black transition-colors">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300">
                This section also adapts to light/dark theme.
            </p>
        </section>
    );
};

export default AboutPage;