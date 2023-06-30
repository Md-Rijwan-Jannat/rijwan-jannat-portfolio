import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/Share/SectionTitle/SectionTitle";
import { FaBoxes } from 'react-icons/fa'
import aboutImage from '../../../assets/Images/about.jpg'
import { motion } from "framer-motion";

export const MyComponent = () => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    />
)

const About = () => {
    return (
        <div className="mb-10">
            <SectionTitle title={'about me'} icon={<FaBoxes />} />
            <Helmet><title>Rijwan jannat | About</title></Helmet>
            <div className="lg:flex items-center bg-[#161042] shadow-lg px-5 py-10 mx-5 lg:p-16 rounded-2xl">
                <div className="flex flex-col justify-start w-full">
                    <h2 className="uppercase text-2xl text-gray-500 mb-3">From</h2>
                    <p className="text-gray-500 text-xl"> Baroanjul, Noymile road, Shajahanpur, Bogura, Bangladesh</p>
                </div>
                <div className="w-full">
                    <img className="w-1/2 lg:w-10/12 rounded-3xl " src={aboutImage} alt="" />
                </div>
                <div className="flex flex-col justify-start w-full">
                    <h2 className="uppercase text-2xl text-gray-500 mb-3">Now I am a Student and learning Programming</h2>
                    <p className="text-gray-500 text-xl"> I am studying in Bogura Polytechnic Institute, Bangladesh. Now, I am learning tow technologies, 1st Computer Science Engineering or 2nd Mechanical Engineering</p>
                </div>
            </div>
        </div>
    );
};

export default About;