import React, { useRef,useState } from 'react';
import Title from "../Components/Title.tsx";
import { LucideMail, Phone, LucideMapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import Button from "../Components/Button.tsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const GetInTouchPage: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_34zfypo', 'template_nyy0wa9', form.current, {
                publicKey: '38MDTyOwA_dN38vv0',
            })
            .then(
                () => {
                    setSuccessMessage('Message sent successfully!');
                    setErrorMessage('');
                    form.current?.reset(); // Clear input fields

                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 4000);
                },
                (error) => {
                    setErrorMessage(`Failed to send message. Please try again later. ${error}`);
                    setSuccessMessage('');

                    setTimeout(() => {
                        setErrorMessage('');
                    }, 4000);
                },
            );
    };

    return (
        <section
            id="getintouch"
            className="w-full pt-20 px-4 sm:px-6 lg:px-10 py-12 bg-white dark:bg-black transition-colors duration-300"
        >
            {/* Title + Description */}
            <motion.div
                className="max-w-3xl mx-auto text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
            >
                <Title title="Get In Touch" />
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the form or the contact details below.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    className="space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={1}
                >
                    <h4 className="text-xl font-semibold text-black dark:text-white">Contact Information</h4>

                    {[
                        {
                            icon: <LucideMail className="text-white dark:text-gray-100" />,
                            label: "Email",
                            value: "harithawikramasinha2003@gmail.com",
                        },
                        {
                            icon: <Phone className="text-white dark:text-gray-100" />,
                            label: "Phone",
                            value: "+94 76 123 4567",
                        },
                        {
                            icon: <LucideMapPin className="text-white dark:text-gray-100" />,
                            label: "Location",
                            value: "111, Katuwaththawala, Ibbawala, Weligama",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={index + 2}
                        >
                            <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-full">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">{item.label}</p>
                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.value}</span>
                            </div>
                        </motion.div>
                    ))}

                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Connect with Me</h4>
                    <motion.div
                        className="flex items-center gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={5}
                    >
                        <Link to="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full hover:scale-105 transition-transform">
                            <Github className="text-gray-600 dark:text-gray-300" />
                        </Link>
                        <Link to="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full hover:scale-105 transition-transform">
                            <Linkedin className="text-gray-600 dark:text-gray-300" />
                        </Link>
                        <Link to="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full hover:scale-105 transition-transform">
                            <Twitter className="text-gray-600 dark:text-gray-300" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={6}
                >
                    <h3 className="text-xl font-semibold text-black dark:text-white">Send Me a Message</h3>

                    {/* Message alerts */}
                    {successMessage && (
                        <div className="p-4 mb-4 rounded-lg border border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200 shadow-md transition-all duration-300">
                             {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="p-4 mb-4 rounded-lg border border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-200 shadow-md transition-all duration-300">
                             {errorMessage}
                        </div>
                    )}


                    <div className="space-y-4">
                        {[
                            { label: "Your Name", name: "user_name", type: "text" },
                            { label: "Your Email", name: "user_email", type: "email" },
                            { label: "Subject", name: "subject", type: "text" },
                        ].map((input, index) => (
                            <motion.div key={input.name} variants={fadeUp} custom={7 + index}>
                                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                                    {input.label}
                                </label>
                                <input
                                    name={input.name}
                                    type={input.type}
                                    required
                                    className="w-full text-gray-600 dark:text-gray-400 px-4 py-2 mt-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                                />
                            </motion.div>
                        ))}

                        <motion.div variants={fadeUp} custom={10}>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                className="w-full px-4 text-gray-600 dark:text-gray-400 py-2 mt-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                            />
                        </motion.div>
                    </div>

                    <motion.div variants={fadeUp} custom={11}>
                        <button type="submit">
                            <Button
                                text="Send Message"
                                bgColor="bg-blue-600 dark:bg-blue-500"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg text-white dark:text-gray-100 hover:opacity-90 transition-all"
                                icon={<Send />}
                            />
                        </button>
                    </motion.div>
                </motion.form>
            </div>
        </section>
    );
};

export default GetInTouchPage;
