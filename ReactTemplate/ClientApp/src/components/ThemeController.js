import React, { createContext, useState, useContext } from 'react';
import themes from "../themes";


export const ThemeContext = createContext(themes.light);



export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

