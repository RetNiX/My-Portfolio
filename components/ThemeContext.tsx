"use client";
import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

interface ThemeContextProviderProps {
    children: React.ReactNode;
}
type Theme = "light" | "dark";

const ThemeContext = createContext<ThemeContextType | null>(null);
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};
export const ThemeContextProvider: FunctionComponent<ThemeContextProviderProps> = ({children} :ThemeContextProviderProps) => {
    let [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark");
        }
    }
    useEffect(() => {
        const localTheme = localStorage.getItem("theme") as Theme;
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);
    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return context;
}