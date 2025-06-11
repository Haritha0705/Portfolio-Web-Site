import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    text: string;
    bgColor: string;
    className: string;
    icon?: string | null | any;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, bgColor, onClick, className = '', icon }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`
                ${bgColor} ${className}
                rounded-2xl
                text-sm sm:text-base md:text-lg lg:text-xl
                py-2 sm:py-3 md:py-4
                px-4 sm:px-6 md:px-9
                cursor-pointer
            `}>
            {text}{icon}
        </motion.button>
    );
};

export default Button;
