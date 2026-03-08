import React, { useEffect, useState } from 'react';

const Loader = ({ onFinished }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onFinished, 500); // Small delay before finishing
                    return 100;
                }
                return prev + 1;
            });
        }, 30); // Adjust speed for a smooth feel

        return () => clearInterval(interval);
    }, [onFinished]);

    return (
        <div className="fixed inset-0 z-[1000] bg-bg-main flex-center flex-col gap-4 font-mono">
            <div className="relative w-48 h-[2px] bg-white/10 overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full bg-accent-primary transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="text-accent-primary text-sm tracking-[0.2em] uppercase origin-left scale-90 opacity-80">
                System Initializing {progress}%
            </div>
        </div>
    );
};

export default Loader;
