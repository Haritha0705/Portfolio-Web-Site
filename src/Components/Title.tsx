import React from 'react';
interface titleProps {
    title:string;
}

const Title:React.FC<titleProps> = ({title}) => {
    return (
        <div className={'relative flex items-center justify-center'}>
            <div className={'absolute bottom-[-20px] h-[0.3rem] w-1/2 bg-blue-500 rounded-2xl'}></div>
            <h1 className={'text-4xl font-bold text-black dark:text-white'}>{title}</h1>
        </div>
    );
};

export default Title;