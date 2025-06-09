import React from 'react';
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4 px-4 sm:px-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Footer Text */}
                <div className="text-center md:text-left text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} Haritha. All rights reserved.
                </div>

                {/* Back to Top Button */}
                <div className="flex justify-center md:justify-end">
                    <button
                        onClick={scrollToTop}
                        className="bg-blue-600 dark:bg-blue-500 p-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition"
                        aria-label="Scroll to Top">
                        <ArrowUp className="text-white dark:text-gray-100" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
