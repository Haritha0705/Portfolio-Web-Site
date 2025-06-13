import React from "react";
import { motion } from "framer-motion";

interface Skill {
    skill: string;
    value: number;
}

interface SkillCardProps {
    title: string;
    skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-all duration-300 w-full">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-5">{title}</h3>

            {skills.map(({ skill, value }, idx) => (
                <div key={idx} className="mb-5">
                    <div className="flex justify-between mb-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                        <span>{skill}</span>
                        <span>{value}%</span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500 ease-in-out"
                            style={{ width: `${value}%` }}
                        />
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default SkillCard;
