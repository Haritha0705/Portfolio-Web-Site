import React from 'react';
import { FolderOpen, Github } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-colors">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
                <h5 className="text-lg font-semibold text-black dark:text-white">{title}</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    <span className="py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-400">React</span>
                    <span className="py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-400">Node.js</span>
                </div>
                <div className="flex justify-between items-center pt-4 text-sm">
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline flex items-center gap-1">
                        <FolderOpen size={18} /> Live Demo
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:underline flex items-center gap-1">
                        <Github size={18} /> Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
