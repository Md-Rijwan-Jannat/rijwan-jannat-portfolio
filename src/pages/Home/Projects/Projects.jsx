import MyProjects from "../../../components/Share/MyProjects/MyProjects";
import SectionTitle from "../../../components/Share/SectionTitle/SectionTitle";
import { CgWebsite } from "react-icons/cg";
import homepage1 from '../../../assets/Images/summerHomePage.png'
import homepage2 from '../../../assets/Images/toysHomePage.png'
import homepage3 from '../../../assets/Images/chefHomePage.png'
import { Helmet } from "react-helmet";

const Projects = () => {
    return (
        <div className="mb-10">
            <SectionTitle title={'My Projects'} icon={<CgWebsite />} />
            <Helmet><title>Rijwan jannat | Projects</title></Helmet>
            <div className="flex items-center flex-col gap-10">
                <MyProjects
                    image={homepage1}
                    name={"summer sports school camp crouse"}
                    details={'The Summer Sports Camp School MERN website is a mobile-responsive platform with dark mode, role management, authentication and authorization using Firebase and JWT, and visually appealing animations. Students can easily enroll in classes and make payments securely.'}
                    link1={'https://github.com/Md-Rijwan-Jannat/summer-sports-school-camp-crouse'}
                    link2={'https://github.com/Md-Rijwan-Jannat/summer-sports-school-server'}
                    link3={'https://summer-sports-camp.web.app/'}
                />
                <MyProjects
                    image={homepage2}
                    name={"sports cars toy"}
                    details={'This responsive web app has conditional navigation, private routes, user authentication with Firebase, and sections for Banners, Galleries, Categories, Trending Toys, and Top Rated Toys. Users can explore, search, add, and view their own toys. The app also includes a Blog page with FAQs. It is a seamless and secure experience for toy enthusiasts'}
                    link1={'https://github.com/Md-Rijwan-Jannat/toy-marcketplace'}
                    link2={'https://github.com/Md-Rijwan-Jannat/Toys-marketplase-server'}
                    link3={'https://toys-marketplace-386bc.web.app/'}
                />
                <MyProjects
                    image={homepage3}
                    name={"popular chef"}
                    details={'This Chef Recipe project is a responsive web app with login functionality. It includes a banner section, a chefs section, and recipe details with a favorite button. The home page is fully responsive, and users can register and log in via email, password, or Google/GitHub.'}
                    link1={'https://github.com/Md-Rijwan-Jannat/popular-chef'}
                    link2={'https://github.com/Md-Rijwan-Jannat/popular-chef-server'}
                    link3={'https://the-chef-recipe.web.app/'}
                />
            </div>
        </div>
    );
};

export default Projects;
