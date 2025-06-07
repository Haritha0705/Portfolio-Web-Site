import React from 'react';
import { Facebook,Instagram,Linkedin,Github } from "lucide-react"


const HomeNew: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#4a79f7] text-white font-sans px-6 py-2">
            <div className={'grid grid-cols-3'}>
                <div className={'h-screen flex flex-col justify-around'}>
                    <h1 className={'text-9xl'}>UI UX<br />DESIGNER</h1>
                    <div>
                        <p className="uppercase font-semibold text-white text-2xl">Hi, I am Alex</p>
                        <p className=" text-gray-100 font-light mt-2 max-w-sm leading-relaxed text-xl">
                            I design intuitive interfaces and develop user-centric solutions, blending creativity and technical expertise to craft seamless digital experiences.
                        </p>
                    </div>
                </div>
                <div>

                </div>
                <div className={'h-screen flex flex-col items-end justify-around'}>
                    <div className={'items-start flex flex-col gap-5'}>
                        <p className="text-xl uppercase font-semibold text-gray-200">
                            Follow me
                        </p>
                        <div className="flex justify-end space-x-4 text-xl">
                            <div className={'p-3 border border-white rounded-full'}>
                                <Facebook />
                            </div>
                            <div className={'p-3 border border-white rounded-full'}>
                                <Instagram />
                            </div>
                            <div className={'p-3 border border-white rounded-full'}>
                                <Linkedin />
                            </div>
                            <div className={'p-3 border border-white rounded-full'}>
                                <Github />
                            </div>
                        </div>
                        <p className="text-lg text-gray-100 max-w-xs">
                            I design intuitive interfaces and develop user-centric
                        </p>
                    </div>
                    <h1 className={'text-9xl'}>FULL<br />STACK<br />CODER</h1>
                </div>
            </div>

        </div>
    );
};

export default HomeNew;
