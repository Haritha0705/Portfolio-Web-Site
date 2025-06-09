import React from "react";
import Title from "../Components/Title.tsx";
import SkillCard from "../Components/SkillCard.tsx";

const SkillsPage: React.FC = () => {
    return (
        <section id="skill" className="w-full pt-20 px-4 sm:px-6 lg:px-10 py-12 bg-white dark:bg-black transition-colors duration-300">
            {/* Title + Description */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <Title title="My Skills" />
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    I've worked with a variety of technologies in the web development world. Here's an overview of my technical skills and proficiency levels.
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
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
                <SkillCard
                    title={"Mobile Development"}
                    skills={[
                        { skill: "Flutter", value: 92 },
                        { skill: "Swift", value: 90 },
                        { skill: "Kotlin", value: 92 },
                    ]}
                />
                <SkillCard
                    title={"Tools & Others"}
                    skills={[
                        { skill: "Git", value: 95 },
                        { skill: "Docker", value: 90 },
                        { skill: "CI/CD", value: 92 },
                        { skill: "Figma", value: 85 },
                    ]}
                />
            </div>

            {/* Other Technologies */}
            <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-50 mb-4">
                    Other Technologies I Work With
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {["Redux", "Tailwind CSS", "Material UI", "AWS", "Firebase", "Vercel", "Cypress"].map((tech) => (
                        <div
                            key={tech}
                            className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-3xl py-1 px-4 text-sm font-medium">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;
