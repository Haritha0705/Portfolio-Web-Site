import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-4 sm:px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">

                {/* Brand & Description */}
                <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-2">Haritha</h3>
                    <p className="text-sm">
                        Creating exceptional web experiences with modern design and performance in mind.
                    </p>
                </div>

                {/* Back to Top */}
                <div className="flex justify-center sm:justify-center md:justify-center">
                    <button
                        onClick={scrollToTop}
                        className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                        aria-label="Scroll to Top"
                    >
                        <ArrowUp className="text-blue-500 dark:text-blue-400" />
                    </button>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center sm:justify-end gap-4 mt-6 sm:mt-0">
                    {[Github, Linkedin, Twitter].map((Icon, i) => (
                        <Icon
                            key={i}
                            size={24}
                            className="cursor-pointer hover:text-blue-500 transition"
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Footer Text */}
            <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-10">
                © {new Date().getFullYear()} Haritha. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
