import MyProjects from "../../../components/Share/MyProjects/MyProjects";
import SectionTitle from "../../../components/Share/SectionTitle/SectionTitle";
import { CgWebsite } from "react-icons/cg";
import homepage1 from '../../../assets/Images/summer_camp.png'
import homepage2 from '../../../assets/Images/sports-toy.png'
import homepage3 from '../../../assets/Images/chefs.png'
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
                    link1={'https://github.com/Md-Rijwan-Jannat/summer-sports-school-camp-crouse'}
                    link2={'https://github.com/Md-Rijwan-Jannat/summer-sports-school-server'}
                    link3={'https://summer-sports-camp.web.app/'}
                />
                <MyProjects
                    image={homepage2}
                    name={"sports cars toy"}
                    link1={'https://github.com/Md-Rijwan-Jannat/toy-marcketplace'}
                    link2={'https://github.com/Md-Rijwan-Jannat/Toys-marketplase-server'}
                    link3={'https://toys-marketplace-386bc.web.app/'}
                />
                <MyProjects
                    image={homepage3}
                    name={"popular chef"}
                    link1={'https://github.com/Md-Rijwan-Jannat/popular-chef'}
                    link2={'https://github.com/Md-Rijwan-Jannat/popular-chef-server'}
                    link3={'https://the-chef-recipe.web.app/'}
                />
            </div>
        </div>
    );
};

export default Projects;
