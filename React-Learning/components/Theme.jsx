import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function Theme() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h1>Current Theme: {theme}</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ThemeDisplay />
            </div>
        </ThemeContext.Provider>
    );
}

function ThemeDisplay() {
    const theme = useContext(ThemeContext);

    return <h2>Theme from Context: {theme}</h2>;
}

export default Theme;