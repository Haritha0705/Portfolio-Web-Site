import React from 'react';
interface aboutCardProps {
    icon:any;
    text:string;
    title:string;
}

const AboutCard:React.FC<aboutCardProps> = ({icon,text,title}) => {
    return (
        <div className="flex flex-col bg-gray-200 dark:bg-gray-800 items-start py-8 px-6 gap-4 rounded-xl max-w-sm shadow-md transition-colors">
            {icon}
            <h4 className="text-black dark:text-white text-xl font-semibold">{title}</h4>
            <p className="text-black dark:text-white text-base leading-relaxed">{text}</p>
        </div>
    );
};

export default AboutCard;
