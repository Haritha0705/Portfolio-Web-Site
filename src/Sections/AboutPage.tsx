import React from 'react';

const AboutPage:React.FC = () => {
    return (
        <section className="p-10">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300">
                This section also adapts to light/dark theme.
            </p>
        </section>
    );
};

export default AboutPage;