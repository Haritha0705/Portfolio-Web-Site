import React, { useState } from 'react';
import Title from "../Components/Title.tsx";
import ProjectCard from "../Components/ProjectCard.tsx";
import Button from "../Components/Button.tsx";
import { motion } from "framer-motion";
import {projects} from "../data/projectData.ts"



const categories = ["All", "Web", "Mobile", "UI/UX"];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const ProjectPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="project" className="w-full pt-[80px] flex flex-col items-center justify-center gap-10 px-4 sm:px-6 lg:px-10 py-12 bg-white dark:bg-black transition-colors duration-300">

            {/* Title + Description */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}

                className="max-w-3xl text-center">
                <Title title="My Projects" />
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Here are some of my recent projects. Each one was carefully crafted to solve specific problems and showcase different skills in my toolkit.
                </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={1}
                className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                    <motion.button

                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-3xl text-sm font-medium cursor-pointer transition-all 
              ${
                            activeCategory === category
                                ? "bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-100"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 "
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {filteredProjects.map((project,index) => (
                    <motion.div key={project.id} custom={index}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technology={project.technology}
                            category={project.category}
                            live={project.live}
                            code={project.code}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* See More Button */}
            <Button
                text="See More on GitHub"
                bgColor="bg-blue-600 dark:bg-blue-500"
                className="flex items-center gap-3 px-6 py-2 rounded-lg text-white dark:text-gray-100 hover:opacity-90 transition-all"
            />
        </section>
    );
};

export default ProjectPage;
