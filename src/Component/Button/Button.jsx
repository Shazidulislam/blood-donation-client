import React from 'react';

const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
    return (
        <div>
            <button
            disabled={disabled}
            onClick={onClick}
             className={`
                 relative 
                 disabled:opacity-70
                 disabled:cursor-not-allowed
                 rounded-md
                 hover:opacity-80
                 transition
                 px-6 
                 text-sm
                 ${outline?"text-black":"text-white"}
                 ${outline?"":"bg-[#B9375D]"}
                 ${outline?"border-[#B9375D] py-1":""}
                 ${small  ?"py-1":"py-2"}
                 ${small  ?"font-light":"font-semibold"}
                 ${small  ?"border":"border-2"}
                 ${disabled?"disabled:hover:cursor-not-allowed":""}
                `}
             >
                {Icon&&(
                    <Icon 
                      size={24}
                            className='
                                absolute
                                left-4
                                top-3
                                '/>
                )}
                {label}
                </button>
        </div>
    );
};

export default Button;