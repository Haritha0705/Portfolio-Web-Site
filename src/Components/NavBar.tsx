import React, { useEffect, useState } from "react";
import { Moon, Sun, MenuIcon, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

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

    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const pages = ['Home', 'About', 'Skills', 'Projects', 'Get In Touch'];
    const pagesLink = ['/', '/about', '/skills', '/projects', '/getintouch'];

    const pageList = pages.map((page, index) => {
        const isActive = location.pathname === pagesLink[index];
        return (
            <li key={page}>
                <Link
                    to={pagesLink[index]}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 md:p-0 ${
                        isActive
                            ? 'text-blue-500 dark:text-blue-400 font-semibold'
                            : 'text-gray-600 dark:text-gray-300'
                    } hover:text-blue-500 transition duration-200`}
                >
                    {page}
                </Link>
            </li>
        );
    });

    return (
        <nav className="w-full fixed top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <div className="text-lg font-bold text-black dark:text-white">Haritha</div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 items-center">
                        {pageList}
                    </ul>

                    {/* Theme Toggle Button */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button onClick={toggleMenu} className="md:hidden text-black dark:text-white">
                            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
                        <ul className="flex flex-col space-y-2 py-4">{pageList}</ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
