import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Location from "../Location/Location";
import Projects from "../Projects/Projects";
import SkillsAndTechnologies from "../SkillsAndTechnologies/SkillsAndTechnologies";


const Home = () => {
    return (
        <div>
            <Banner/>
            <SkillsAndTechnologies/>
            <Projects/>
            <About/>
            <Location/>
            <Contact/>
        </div>
    );
};

export default Home;