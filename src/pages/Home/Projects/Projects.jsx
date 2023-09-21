import MyProjects from "../../../components/Share/MyProjects/MyProjects";
import SectionTitle from "../../../components/Share/SectionTitle/SectionTitle";
import { CgWebsite } from "react-icons/cg";
import homepage1 from '../../../../src/assets/Images/screencapture-summer-sports-camp-web-app-2023-08-31-00_07_43.png'
import homepage2 from '../../../assets/Images/toysrHomePage.png'
import homepage3 from '../../../assets/Images/chefHomePage.png'
import homepage4 from '../../../assets/Images/neax_js.png'
import homepage5 from '../../../assets/Images/ai-react-home.png'
import { Helmet } from "react-helmet";

import html from '../../../assets/Images/html-removebg-preview.png';
import css from '../../../assets/Images/css-removebg-preview.png';
import react from '../../../assets/Images/react-removebg-preview.png';
import javascript from '../../../assets/Images/Javascript.png';
import tailwind from '../../../assets/Images/tawilwind-removebg-preview (1).png';
import next_js from '../../../assets/Images/next_js.png';
import express from '../../../assets/Images/express-removebg-preview.png';
import node from '../../../assets/Images/node-removebg-preview.png';
import mongoDb from '../../../assets/Images/mongoDb-removebg-preview.png';
import jwt from '../../../assets/Images/jwt-removebg-preview (2).png';

const Projects = () => {
    return (
        <div id="#projects" className="pb-10">
            <SectionTitle title={'My Projects'} icon={<CgWebsite />} />
            <Helmet><title>Rijwan jannat | Projects</title></Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <MyProjects
                    image={homepage1}
                    name={"summer sports school camp crouse"}
                    details={'The Summer Sports Camp School MERN website is a mobile-responsive platform with dark mode, role management, authentication and authorization using Firebase and JWT, and visually appealing animations. Students can easily enroll in classes and make payments securely.'}
                    des1={'First, the web site has a nice snider. Below that are popular classes, instructors, student reviews, and footers.'}
                    des2={'The project contains all class and instructor pages and has its own power for students, instructors, and admin.'}
                    des3={'Admin can remove student and instructor and change their role. You can see details by looking at the website.'}
                    link1={'https://github.com/Md-Rijwan-Jannat/summer-sports-school-camp-crouse'}
                    link2={'https://github.com/Md-Rijwan-Jannat/summer-sports-school-server'}
                    link3={'https://summer-sports-camp.web.app/'}
                    technology1={react}
                    technology2={javascript}
                    technology3={node}
                    technology4={express}
                    technology5={mongoDb}
                    technology6={jwt}
                />
                <MyProjects
                    image={homepage2}
                    name={"sports cars toy"}
                    details={'This responsive web app has conditional navigation, private routes, user authentication with Firebase, and sections for Banners, Galleries, Categories, Trending Toys, and Top Rated Toys. Users can explore, search, add, and view their own toys. The app also includes a Blog page with FAQs. It is a seamless and secure experience for toy enthusiasts'}
                    des1={'This dynamic toy sports car marketplace allows you to effortlessly list sports cars for making for toys enthusiasts.'}
                    des2={'Whether you are a buyer or a seller, our platform ensures a seamless experience. You are simply log in or register'}
                    des3={'Explore and discover various categories of toy cars or contribute by adding your own listings for sale.'}
                    link1={'https://github.com/Md-Rijwan-Jannat/toy-marcketplace'}
                    link2={'https://github.com/Md-Rijwan-Jannat/Toys-marketplase-server'}
                    link3={'https://toys-marketplace-386bc.web.app/'}
                    technology6={html}
                    technology1={react}
                    technology2={javascript}
                    technology3={node}
                    technology4={express}
                    technology5={mongoDb}
                />
                <MyProjects
                    image={homepage3}
                    name={"popular chef"}
                    details={'This Chef Recipe project is a responsive web app with login functionality. It includes a banner section, a chefs section, and recipe details with a favorite button. The home page is fully responsive, and users can register and log in via email, password, or Google/GitHub.'}
                    des1={'Visually appealing design showcasing culinary artistry, enhancing user engagement and appetite.'}
                    des2={'Seamless navigation for recipes, chef profiles, and interactive cooking tutorials, optimizing user experience.'}
                    des3={'Mobile-friendly layout, ensuring accessibility across devices for food enthusiasts on-the-go.'}
                    link1={'https://github.com/Md-Rijwan-Jannat/popular-chef'}
                    link2={'https://github.com/Md-Rijwan-Jannat/popular-chef-server'}
                    link3={'https://the-chef-recipe.web.app/'}
                    technology6={html}
                    technology1={react}
                    technology2={javascript}
                    technology3={node}
                    technology4={express}
                    technology5={mongoDb}
                />
                <MyProjects
                    image={homepage4}
                    name={"Aesop"}
                    details={''}
                    des1={'Create a visually appealing product page that displays the product name, image, and description.'}
                    des2={'Implement a feature that allows users to view the product from different angles by hovering over or clicking on the product image.'}
                    des3={'Ensure that the application is responsive and looks good on various screen sizes and devices, including mobile phones and tablets.'}
                    link1={'https://github.com/Md-Rijwan-Jannat/assignment-app'}
                    link2={''}
                    link3={'https://aesop-shop.netlify.app/'}
                    technology6={html}
                    technology1={css}
                    technology2={tailwind}
                    technology3={node}
                    technology4={next_js}
                    technology5={javascript}
                />
                <MyProjects
                    image={homepage5}
                    name={"Ai work Squad"}
                    details={''}
                    des1={'Develop a user-friendly interface that allows project managers to assign tasks to AI work squad members.'}
                    des2={'Ensure that the frontend supports various AI model types and provides insights into their results and accuracy.'}
                    des3={'Implement real-time collaboration tools to allow team members to work together efficiently and provide feedback on AI model outputs.'}
                    link1={'https://github.com/Md-Rijwan-Jannat/Ai-frontend-Interviews-task'}
                    link2={'https://github.com/Md-Rijwan-Jannat/Ai-frontend-Interviews-task'}
                    link3={'https://ai-frontend-interviews-task.vercel.app/'}
                    technology6={html}
                    technology1={css}
                    technology2={tailwind}
                    technology3={node}
                    technology4={next_js}
                    technology5={javascript}
                />
            </div>
        </div>
    );
};

export default Projects;
