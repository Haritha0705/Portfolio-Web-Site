import React from 'react';
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.footer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4 px-6 sm:px-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Footer Text */}
                <div className="text-center md:text-left text-sm text-black dark:text-white">
                    © {new Date().getFullYear()} Haritha. All rights reserved.
                </div>

                {/* Back to Top Button */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex justify-center md:justify-end">
                    <button
                        onClick={scrollToTop}
                        className="bg-blue-600 dark:bg-blue-500 p-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition animate-bounce cursor-pointer"
                        aria-label="Scroll to Top">
                        <ArrowUp className="text-white dark:text-gray-100" />
                    </button>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
