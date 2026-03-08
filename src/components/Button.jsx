import React from 'react'

const Button = ({ text, className, id }) => {
    return (
        <a href={`#${id || 'work'}`} className={className}>
            <div className="animate-shine rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100 w-fit">
                <button className="px-8 text-sm py-2.5 text-white rounded-full font-medium bg-black-100 flex items-center justify-center relative z-10 w-full h-full cursor-pointer">
                    {text}
                </button>
            </div>
        </a>
    )
}

export default Button