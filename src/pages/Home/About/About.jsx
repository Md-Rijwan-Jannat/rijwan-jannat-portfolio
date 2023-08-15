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
            <div data-aos="fade-up" className="lg:flex gap-10 items-center space-y-5 bg-[#161042] shadow-lg py-10 lg:p-16 rounded-2xl p-5">
                <div className="flex flex-col justify-start w-full">
                    <h2 className="uppercase text-2xl text-gray-500 mb-3 gradient-animation">From</h2>
                    <hr className='border-gray-500 border-4 mb-5' />
                    <p className="text-gray-500 text-xl ml-3"> Baroanjul, Noymile road, Shajahanpur, Bogura, Bangladesh</p>
                </div>
                <div className="w-full relative overflow-hidden rounded-xl">
                    <div className="transition-transform duration-500 ease-in-out hover:scale-110 transform origin-center">
                        <img src={aboutImage} alt="" />
                    </div>
                </div>

                <div className="flex flex-col justify-start w-full">
                    <h2 className="uppercase text-2xl text-gray-500 mb-3 gradient-animation">Now I am a Student and learning Programming</h2>
                    <hr className='border-gray-500 border-4 mb-5' />
                    <p className="text-gray-500 text-xl ml-3"> I am studying in Bogura Polytechnic Institute, Bangladesh. Now, I am learning tow technologies, 1st Computer Science Engineering or 2nd Mechanical Engineering</p>
                </div>
            </div>
            <div data-aos="fade-up" className="lg:flex gap-10 justify-between my-10">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className=" w-full"
                >
                    <div className="flex flex-col h-[200px] justify-center items-center text-3xl font-bold p-16 shadow hover:shadow-md hover:shadow-blue-500 shadow-blue-500  lg:text-xl rounded-md px-4 py-1 bg-opacity-50 bg-[#12104d] text-gray-500">
                        <h2 className="text-gray-500 text-3xl font-bold gradient-animation">9</h2>
                        <p className="text-gray-500 text-2xl font-semibold uppercase">Month experience</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className=" w-full"
                >
                    <div className="flex flex-col w-full h-[200px] justify-center items-center text-3xl font-bold p-16 shadow hover:shadow-md hover:shadow-blue-500 shadow-blue-500  lg:text-xl rounded-md px-4 py-1 bg-opacity-50 bg-[#12104d] text-gray-500">
                        <h2 className="text-3xl font-bold gradient-animation">12+</h2>
                        <p className="text-gray-500 text-2xl font-semibold uppercase">Projects</p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className=" w-full"
                >
                    <div className="flex flex-col w-full h-[200px] justify-center items-center text-3xl font-bold p-16 shadow hover:shadow-md hover:shadow-blue-500 shadow-blue-500  lg:text-xl rounded-md px-4 py-1 bg-opacity-50 bg-[#12104d] text-gray-500">
                        <h2 className="text-gray-500 text-3xl font-bold gradient-animation">20+</h2>
                        <p className="text-gray-500 text-2xl font-semibold uppercase">Repositories</p>
                    </div>
                </motion.div>
            </div>
        </div>

    );
};

export default About;