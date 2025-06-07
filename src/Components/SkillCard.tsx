import React from "react";

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
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 transition-all duration-300 w-full">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-5">{title}</h3>

            {skills.map(({ skill, value }, idx) => (
                <div key={idx} className="mb-5">
                    <div className="flex justify-between mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <span>{skill}</span>
                        <span>{value}%</span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500 ease-in-out"
                            style={{ width: `${value}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillCard;
