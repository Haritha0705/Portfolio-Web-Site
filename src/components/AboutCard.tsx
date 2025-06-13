import React from 'react';
import { motion } from 'framer-motion';

interface aboutCardProps {
    icon:any;
    text:string;
    title:string;
}

const AboutCard:React.FC<aboutCardProps> = ({icon,text,title}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col bg-gray-100 dark:bg-gray-800 items-start py-8 px-6 gap-4 rounded-xl max-w-sm shadow-md transition-colors">
            {icon}
            <h4 className="text-black dark:text-white text-xl font-semibold">{title}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed whitespace-pre-line">{text}</p>
        </motion.div>
    );
};

export default AboutCard;
