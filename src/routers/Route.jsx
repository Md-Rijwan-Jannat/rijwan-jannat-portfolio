import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import SkillsAndTechnologies from "../pages/Home/SkillsAndTechnologies/SkillsAndTechnologies";
import About from "../pages/Home/About/About";
import Contact from "../pages/Home/Contact/Contact";
import Location from "../pages/Home/Location/Location";
import Projects from "../pages/Home/Projects/Projects";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:<SkillsAndTechnologies></SkillsAndTechnologies>,
            element:'skills'
        },
        {
            path:<About></About>,
            element:'about'
        },
        {
            path:<Contact></Contact>,
            element:'contact'
        },
        {
            path:<Location></Location>,
            element:'location'
        },
        {
            path:<Projects></Projects>,
            element:'project'
        },
      ]
    },
  ]);

  export default router ;