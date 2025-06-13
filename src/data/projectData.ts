import FitnessApp from "../assets/FitnessApp.png"
import GrabIT from "../assets/GrabIT.png"
import Portfolio from "../assets/myWeb.png"
import Etutor from "../assets/etutor.png"
import Student_Management from "../assets/Student Management.jpeg"

export const projects = [
    {
        id: 1,
        title: "E-tutor-lms",
        description: "A full-featured e-commerce store with cart and Stripe payments.",
        image: Etutor,
        technology: ["React","Node js"],
        category: "Web",
        live: "#",
        code: "https://github.com/Haritha0705/etutor-lms"
    },
    {
        id: 2,
        title: "Mobile Fitness App",
        description: "Track workouts, progress, and sync data across devices.",
        image: FitnessApp,
        technology: ["Dart","Flutter"],
        category: "Mobile",
        live: "#",
        code: "https://github.com/Haritha0705/workout_planner_app.git"
    },
    {
        id: 3,
        title: "Grab IT Mobile App UI ",
        description: "Redesigned a dashboard with modern UI/UX principles.",
        image: GrabIT,
        technology: ["Figma"],
        category: "UI/UX",
        live: "#",
        code: "https://github.com/Haritha0705/Grab_IT_Mobile_App_UI.git"
    },
    {
        id: 4,
        title: "Student-Management-System",
        description: "Content management system for writers and bloggers.",
        technology: ["React","Node js","Vite","Tailwind CSS"],
        image: Student_Management,
        category: "Web",
        live: "#",
        code: "https://github.com/Haritha0705/Student-Management-System.git"
    },
    {
        id: 5,
        title: " Library Management System",
        description: "Mobile app to plan and organize travel experiences.",
        technology: ["React","Node js","Vite","Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Web",
        live: "#",
        code: "https://github.com/Haritha0705/library_management_system.git"
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "Personal portfolio to showcase my projects and skills.",
        technology: ["React","Vite","TypeScript","Tailwind CSS","Motion","EmailJS"],
        image: Portfolio,
        category: "Web",
        live: "#",
        code: "https://github.com/Haritha0705/Portfolio-Web-Site.git"
    },
];
