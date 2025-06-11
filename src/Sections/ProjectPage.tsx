import React, { useState } from 'react';
import Title from "../Components/Title.tsx";
import ProjectCard from "../Components/ProjectCard.tsx";
import Button from "../Components/Button.tsx";
import { motion } from "framer-motion";

// Demo project data
const projects = [
    {
        id: 1,
        title: "E-Commerce Store",
        description: "A full-featured e-commerce store with cart and Stripe payments.",
        imageUrl: "https://images.unsplash.com/photo-1674027392851-7b34f21b07ee?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Web",
    },
    {
        id: 2,
        title: "Mobile Fitness App",
        description: "Track workouts, progress, and sync data across devices.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1712761999418-9efae1e83075?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Mobile",
    },
    {
        id: 3,
        title: "UI Redesign Project",
        description: "Redesigned a dashboard with modern UI/UX principles.",
        imageUrl: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80",
        category: "UI/UX",
    },
    {
        id: 4,
        title: "Blog CMS",
        description: "Content management system for writers and bloggers.",
        imageUrl: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80",
        category: "Web",
    },
    {
        id: 5,
        title: "Travel App",
        description: "Mobile app to plan and organize travel experiences.",
        imageUrl: "https://images.unsplash.com/photo-1524850301259-7729d41d11d9?q=80&w=3494&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Mobile",
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "Personal portfolio to showcase my projects and skills.",
        imageUrl: "https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?q=80&w=3520&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "UI/UX",
    },
];


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
                    <motion.div key={project.id} custom={index} variants={fadeInUp}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            category={project.category}
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
