import { useState, useEffect } from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(null);
 
    useEffect(() => {
        const handleResize = () => {
            const breakpoint = window.innerWidth;
            switch (true) {
                case breakpoint >= 1536:
                   setWindowSize('2xl');
                   break;
                case breakpoint >= 1280:
                   setWindowSize('xl');
                   break;
                case breakpoint >= 1024:
                   setWindowSize('lg');
                   break;
                case breakpoint >= 768:
                   setWindowSize('md');
                   break;
                case breakpoint >= 640:
                   setWindowSize('sm');
                   break;
                default:
                   setWindowSize('sm');
                   break;
            }
        };
 
        handleResize();
        window.addEventListener('resize', handleResize);
 
        return () => window.removeEventListener('resize', handleResize);
    }, []);
 
    return { windowSize };
 };