import React from 'react';

const TailwindContainer = (props) => {
    return (

        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform skew-y-0 -rotate-12 rounded-3xl"></div>
                <div className="relative bg-white shadow-lg rounded-3xl p-8">
                    <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="container w-64">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TailwindContainer;
