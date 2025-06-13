import { useEffect, useState } from "react";
import { Moon, Sun, MenuIcon, X  } from "lucide-react";
import { motion } from "framer-motion";

const NavBar = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "light" || savedTheme === "dark") {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        if (theme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const links = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skill", href: "#skill" },
        { label: "Project", href: "#project" },
        { label: "GetInTouch", href: "#getintouch" },
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                <div className="text-xl font-bold dark:text-white">Haritha</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Theme and Mobile Menu */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white cursor-pointer"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button className="md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? <X  size={24} className={'text-black dark:text-white cursor-pointer'} /> : <MenuIcon className={'text-black dark:text-white cursor-pointer'} size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="md:hidden bg-white dark:bg-gray-900">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default NavBar;
