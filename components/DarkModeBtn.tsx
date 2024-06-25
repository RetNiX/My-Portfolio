"use client";

import { FunctionComponent } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from './ThemeContext';

interface DarkModeProps {

}

const DarkMode: FunctionComponent<DarkModeProps> = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-50 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-900'
            onClick={toggleTheme}>
            {theme === "light" ? (<BsSun className='text-lg' />) : (<BsMoon className='text-lg' />)}
        </button>
    );
}

export default DarkMode;