import React, { createContext, useState, useContext, useEffect } from 'react';
import themes from '../themes';

export const ThemeContext = createContext(themes.light);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check if a theme is saved in local storage
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : themes.light;
    });

    useEffect(() => {
        // Save the theme in local storage whenever it changes
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === themes.light ? themes.dark : themes.light));
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
