import React from 'react';

const TailwindContainer = (props) => {
    return (

        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-sm sm:mx-auto">
                <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div class="relative bg-white shadow-lg sm:rounded-3xl p-8">
                    <div class="container w-64">
                        { props.children }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TailwindContainer;
