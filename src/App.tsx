import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from "./Sections/HomePage.tsx";
import AboutPage from "./Sections/AboutPage.tsx";
import SkillsPage from "./Sections/SkillsPage.tsx";
import ProjectPage from "./Sections/ProjectPage.tsx";
import GetInTouchPage from "./Sections/GetInTouchPage.tsx";
import NotFoundPage from "./Sections/NotFoundPage.tsx";
import NavBar from "./Components/NavBar.tsx";
import Footer from "./Components/Footer.tsx";
import HomeNew from "./Sections/HomeNew.tsx";

const App: React.FC = () => {
    return (
        // <BrowserRouter>
        //     <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        //         <NavBar/>
        //         <main>
        //             {/*className={'pt-[70px]'}*/}
        //             <Routes>
        //                 <Route path='/' element={<HomePage />} />
        //                 <Route path='/about' element={<AboutPage />} />
        //                 <Route path='/skills' element={<SkillsPage />} />
        //                 <Route path='/projects' element={<ProjectPage />} />
        //                 <Route path='/getintouch' element={<GetInTouchPage />} />
        //                 <Route path='*' element={<NotFoundPage />} />
        //             </Routes>
        //         </main>
        //         <Footer/>
        //     </div>
        // </BrowserRouter>
        <HomeNew/>

    );
};

export default App;
