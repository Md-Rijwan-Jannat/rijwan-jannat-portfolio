import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import SkillsAndTechnologies from "../pages/Home/SkillsAndTechnologies/SkillsAndTechnologies";
import Projects from "../pages/Home/Projects/Projects";
import About from "../pages/Home/About/About";
import Location from "../pages/Home/Location/Location";
import Contact from "../pages/Home/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'skills',
                element: <SkillsAndTechnologies />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'location',
                element: <Location />
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    },
]);

export default router;