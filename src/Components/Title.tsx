import React from 'react';
import { motion } from 'framer-motion';

interface titleProps {
    title: string;
}

const Title: React.FC<titleProps> = ({ title }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center mb-6">
            <div className="absolute bottom-[-20px] h-[0.3rem] w-1/12 bg-blue-600 dark:bg-blue-500 rounded-2xl"></div>
            <h1 className="text-4xl font-bold text-black dark:text-white">{title}</h1>
        </motion.div>
    );
};

export default Title;
