import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeProvider = ({showIcon}:{showIcon:boolean}) => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
        }
    }, [resolvedTheme, mounted]);

    if (!mounted) return null; 

    return (
        <div className='flex justify-center items-center gap-6 '>
           {!showIcon && <FontAwesomeIcon icon={faChevronLeft} className='w-5 h-5 md:w-7 md:h-7 animate-blink' />}
           {showIcon && <FontAwesomeIcon icon={faChevronRight} className='w-5 h-5 md:w-7 md:h-7 animate-blink' />}
            <button onClick={toggleTheme}>
                {theme === 'light' ? (
                    <FontAwesomeIcon icon={faMoon} className='w-5 h-5 md:w-7 md:h-7' />
                ) : (
                    <FontAwesomeIcon icon={faSun} className='w-5 h-5 md:w-7 md:h-7' />
                )}
            </button>
        </div>
    );
};

export default ThemeProvider;
