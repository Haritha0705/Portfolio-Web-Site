import React from 'react';
interface ButtonProps {
    text:string;
    bgColor:string;
    className:string;
    icon?: string | null | any;
    onClick?: () => void;
}

const Button:React.FC<ButtonProps> = ({text,bgColor,onClick,className='',icon}) => {
    return (
        <button
            onClick={onClick}
            className={`${bgColor} ${className}  rounded-2xl text-lg py-4 px-9 `}>
            {text}{icon}
        </button>
    );
};

export default Button;