import React from "react";
import Title from "../Components/Title.tsx";
import SkillCard from "../Components/SkillCard.tsx";
import { motion } from "framer-motion";

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

const SkillsPage: React.FC = () => {
    return (
        <section id="skill" className="w-full pt-20 px-4 sm:px-6 lg:px-10 py-12 bg-white dark:bg-black transition-colors duration-300">

            {/* Title + Description */}
            <motion.div
                className="max-w-3xl mx-auto text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Title title="My Skills" />
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    I've worked with a variety of technologies in the web development world. Here's an overview of my technical skills and proficiency levels.
                </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {[...Array(4)].map((_, i) => (
                    <motion.div key={i} custom={i} variants={fadeInUp}>
                        {i === 0 && (
                            <SkillCard
                                title={"Languages"}
                                skills={[
                                    { skill: "Java", value: 85 },
                                    { skill: "Python", value: 90 },
                                    { skill: "JavaScript", value: 92 },
                                    { skill: "TypeScript", value: 85 },
                                    { skill: "Dart", value: 95 },
                                    { skill: "HTML5", value: 95 },
                                    { skill: "CSS3/SCSS", value: 90 },
                                ]}
                            />
                        )}
                        {i === 1 && (
                            <SkillCard
                                title={"Web Development"}
                                skills={[
                                    { skill: "React", value: 85 },
                                    { skill: "Next.js", value: 80 },
                                    { skill: "Node.js", value: 95 },
                                    { skill: "Spring Boot", value: 95 },
                                    { skill: "Flask", value: 95 },
                                    { skill: "MongoDB", value: 92 },
                                    { skill: "PostgreSQL", value: 85 },
                                ]}
                            />
                        )}
                        {i === 2 && (
                            <SkillCard
                                title={"Mobile Development"}
                                skills={[
                                    { skill: "Flutter", value: 92 },
                                    { skill: "Swift", value: 90 },
                                    { skill: "Kotlin", value: 92 },
                                ]}
                            />
                        )}
                        {i === 3 && (
                            <SkillCard
                                title={"Tools & Others"}
                                skills={[
                                    { skill: "Git", value: 95 },
                                    { skill: "Docker", value: 90 },
                                    { skill: "CI/CD", value: 92 },
                                    { skill: "Figma", value: 85 },
                                ]}
                            />
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Other Technologies */}
            <motion.div
                className="mt-12 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={5}
            >
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-50 mb-4">
                    Other Technologies I Work With
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {["Redux", "Tailwind CSS", "Material UI", "AWS", "Firebase", "Vercel", "Cypress"].map((tech, index) => (
                        <motion.div
                            key={tech}
                            className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-3xl py-1 px-4 text-sm font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default SkillsPage;
