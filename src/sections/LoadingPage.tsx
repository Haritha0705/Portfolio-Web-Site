import React from 'react';

const LoadingPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <video
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56"
                autoPlay
                loop
                muted
            >
                <source src="/loading-video.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default LoadingPage;
