import React from "react";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
            }}
        >
            {children}
        </ ThemeContext.Provider>
    )
}


export const useTheme = () => useContext(ThemeContext);

//export const useTheme = () => ({ theme: "light" });
