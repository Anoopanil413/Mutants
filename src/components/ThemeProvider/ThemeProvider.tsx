import React, { useEffect } from 'react'
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const ThemeProvider = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        console.log('theme',theme)
        setTheme(theme === 'light' ? 'dark' : 'light');
      };

      useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
      }, [theme]);

  return (
    <div className='flex justify-center items-center gap-6 border border-red-400 '>
        <FontAwesomeIcon icon={faChevronLeft} className='w-7 h-7'/>
        <button onClick={toggleTheme}>{theme === 'light'?<FontAwesomeIcon icon={faMoon} className='w-7 h-7' />: <FontAwesomeIcon icon={faSun} className='w-7 h-7' />}</button>

    </div>
  )
}

export default ThemeProvider
