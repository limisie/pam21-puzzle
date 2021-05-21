import React from 'react';

const TailwindContainer = (props) => {
    return (
        <div className="h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 overflow-hidden">
            <div className="relative py-3 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform skew-y-0 -rotate-12 rounded-3xl"></div>
                <div className="relative bg-white shadow-lg rounded-3xl p-8">
                    <div className="container w-screen lg:w-96">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TailwindContainer;
