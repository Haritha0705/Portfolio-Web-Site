import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react';

function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'light' || savedTheme === 'dark') {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <section className="p-4">
            <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <h1 className="text-3xl font-bold mt-4 text-black dark:text-white">
                Theme is {theme}
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mt-2">
                This text color changes with the theme.
            </p>
        </section>
    );
}

export default App;
