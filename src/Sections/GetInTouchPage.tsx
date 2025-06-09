import React from 'react';
import Title from "../Components/Title.tsx";
import { LucideMail, Phone, LucideMapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import Button from "../Components/Button.tsx";
import {Link} from "react-router-dom";

const GetInTouchPage: React.FC = () => {
    return (
        <section id="getintouch" className="w-full pt-20 px-4 sm:px-6 lg:px-10 py-12 bg-white dark:bg-black transition-colors duration-300">
            {/* Title + Description */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <Title title="Get In Touch" />
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the form or the contact details below.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <h4 className="text-xl font-semibold text-black dark:text-white">Contact Information</h4>

                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                            <LucideMail className="text-blue-600 dark:text-blue-500" />
                        </div>
                        <div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">Email</p>
                            <span className="text-sm text-gray-600 dark:text-gray-400">harithawikramasinha2003@gmail.com</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                            <Phone className="text-blue-600 dark:text-blue-500" />
                        </div>
                        <div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">Phone</p>
                            <span className="text-sm text-gray-600 dark:text-gray-400">+94 76 123 4567</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                            <LucideMapPin className="text-blue-600 dark:text-blue-500" />
                        </div>
                        <div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">Location</p>
                            <span className="text-sm text-gray-600 dark:text-gray-400">111, Katuwaththawala, Ibbawala, Weligama</span>
                        </div>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Connect with Me</h4>
                    <div className="flex items-center gap-4">
                        <Link to={'https://github.com/your-username'} target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full hover:scale-105 transition-transform">
                            <Github className="text-gray-600 dark:text-gray-300" />
                        </Link>
                        <Link to={'https://linkedin.com/in/your-username'} target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full hover:scale-105 transition-transform">
                            <Linkedin className="text-gray-600 dark:text-gray-300" />
                        </Link>
                        <Link to={'https://linkedin.com/in/your-username'} target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full hover:scale-105 transition-transform">
                            <Twitter className="text-gray-600 dark:text-gray-300" />
                        </Link>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-black dark:text-white">Send Me a Message</h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Your Name</label>
                            <input type="text" className="w-full text-gray-600 dark:text-gray-400 px-4 py-2 mt-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Your Email</label>
                            <input type="email" className="w-full text-gray-600 dark:text-gray-400 px-4 py-2 mt-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Subject</label>
                            <input type="text" className="w-full text-gray-600 dark:text-gray-400 px-4 py-2 mt-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Message</label>
                            <textarea rows={4} className="w-full px-4 text-gray-600 dark:text-gray-400 py-2 mt-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600" />
                        </div>
                    </div>

                    <Button
                        text="Send Message"
                        bgColor="bg-blue-600 dark:bg-blue-500"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg text-white dark:text-black hover:opacity-90 transition-all"
                        icon={<Send className="text-white dark:text-black"/>}
                    />
                </div>
            </div>
        </section>
    );
};

export default GetInTouchPage;
