import React from 'react';
import { Facebook, Instagram, Linkedin, Github, Code2 } from "lucide-react";

const HomeNew: React.FC = () => {
    return (
        <div className="relative w-full min-h-screen bg-white font-sans px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-6 sm:py-8 md:py-12">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-center max-w-7xl mx-auto">

                {/* Left Section */}
                <div className="w-full flex flex-col justify-between order-2 md:order-1 py-6 sm:py-8 md:py-0 h-auto md:min-h-[70vh] lg:min-h-[80vh]">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-blue-500 leading-tight mb-4 sm:mb-6 md:mb-0">
                        Web<br />Developer
                    </h1>
                    <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                        <p className="uppercase font-semibold text-base sm:text-lg md:text-xl text-gray-800">Hi, I am Alex</p>
                        <p className="text-gray-700 font-light leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                            I design intuitive interfaces and develop user-centric solutions.
                        </p>
                    </div>
                </div>

                {/* Center Icon */}
                <div className="w-full flex justify-center items-center order-1 md:order-2 py-4 sm:py-6 md:py-0 h-auto md:min-h-[70vh] lg:min-h-[80vh]">
                    <Code2
                        className="text-blue-500 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[420px] h-auto"
                    />
                </div>

                {/* Right Section */}
                <div className="w-full flex flex-col justify-between items-start sm:items-center md:items-end order-3 py-6 sm:py-8 md:py-0 h-auto md:min-h-[70vh] lg:min-h-[80vh] text-left sm:text-center md:text-right">
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-start sm:items-center md:items-end w-full">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl uppercase font-semibold text-gray-800">Follow me</p>
                        <div className="flex gap-2 sm:gap-3 md:gap-4 justify-start sm:justify-center md:justify-end w-full">
                            {[Facebook, Instagram, Linkedin, Github].map((Icon, index) => (
                                <div
                                    key={index}
                                    className="p-2 sm:p-2.5 md:p-3 border border-blue-500 flex items-center justify-center rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
                                >
                                    <Icon size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </div>
                            ))}
                        </div>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md">
                            I design intuitive interfaces and develop user-centric solutions.
                        </p>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-blue-500 leading-tight text-left sm:text-center md:text-left mt-6 sm:mt-8 md:mt-6 lg:mt-0">
                        Mobile<br />Developer
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HomeNew;