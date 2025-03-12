import React from "react";

const Loader = ({ className }) => {
    return (

        <div className={`flex justify-center items-center bg-gray-100 ${className}`}>
            <div className="flex space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
            <div className="mt-8 pt-1 -ml-15 text-gray-400"><span>Loading...</span></div>
        </div>
    );
};

export default Loader;
