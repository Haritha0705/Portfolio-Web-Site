import React from 'react';
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-4 sm:px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">

                {/* Left (Optional Placeholder for social icons or extra info) */}
                <div></div>

                {/* Center Footer Text */}
                <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} Haritha. All rights reserved.
                </div>

                {/* Back to Top Button */}
                <div className="flex justify-center md:justify-end">
                    <button
                        onClick={scrollToTop}
                        className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                        aria-label="Scroll to Top"
                    >
                        <ArrowUp className="text-blue-500 dark:text-blue-400" />
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
