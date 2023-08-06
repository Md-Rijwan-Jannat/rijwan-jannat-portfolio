import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/Share/SectionTitle/SectionTitle";
import { FaBoxes } from 'react-icons/fa'
import aboutImage from '../../../assets/Images/about.jpg'
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const MyComponent = () => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    />
)

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="my-16">
            <SectionTitle title={'about me'} icon={<FaBoxes />} />
            <Helmet><title>Rijwan jannat | About</title></Helmet>
            <div data-aos="fade-up" className="lg:flex space-y-5 items-center bg-[#161042] shadow-lg px-5 py-10 mx-5 lg:p-16 rounded-2xl">
                <div className="flex flex-col justify-start w-full">
                    <h2 className="uppercase text-2xl text-gray-500 mb-3 gradient-animation">From</h2>
                    <p className="text-gray-500 text-xl"> Baroanjul, Noymile road, Shajahanpur, Bogura, Bangladesh</p>
                </div>
                <div className="w-full">
                    <img className="w-1/2 lg:w-10/12 rounded-3xl " src={aboutImage} alt="" />
                </div>
                <div className="flex flex-col justify-start w-full">
                    <h2 className="uppercase text-2xl text-gray-500 mb-3 gradient-animation">Now I am a Student and learning Programming</h2>
                    <p className="text-gray-500 text-xl"> I am studying in Bogura Polytechnic Institute, Bangladesh. Now, I am learning tow technologies, 1st Computer Science Engineering or 2nd Mechanical Engineering</p>
                </div>
            </div>
            <div data-aos="fade-up" className="lg:flex gap-10 justify-between my-10">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className=" w-full"
                >
                    <div className="flex flex-col h-[200px] justify-center items-center text-3xl font-bold p-16 shadow-md shadow-blue-100  lg:text-xl rounded-md px-4 py-1 bg-opacity-50 bg-[#12104d] text-gray-500">
                        <h2 className="text-gray-500 text-3xl font-bold gradient-animation">9</h2>
                        <p className="text-gray-500 text-2xl font-semibold uppercase">Month experience</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className=" w-full"
                >
                    <div className="flex flex-col w-full h-[200px] justify-center items-center text-3xl font-bold p-16 shadow-md shadow-blue-100  lg:text-xl rounded-md px-4 py-1 bg-opacity-50 bg-[#12104d] text-gray-500">
                        <h2 className="text-3xl font-bold gradient-animation">12+</h2>
                        <p className="text-gray-500 text-2xl font-semibold uppercase">Projects</p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className=" w-full"
                >
                    <div className="flex flex-col w-full h-[200px] justify-center items-center text-3xl font-bold p-16 shadow-md shadow-blue-100  lg:text-xl rounded-md px-4 py-1 bg-opacity-50 bg-[#12104d] text-gray-500">
                        <h2 className="text-gray-500 text-3xl font-bold gradient-animation">20+</h2>
                        <p className="text-gray-500 text-2xl font-semibold uppercase">Repositories</p>
                    </div>
                </motion.div>
            </div>
        </div>

    );
};

export default About;