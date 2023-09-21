import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaCheckCircle, FaGithub, FaRProject } from "react-icons/fa";
import TechnologiesBuble from "../../TechnologiesBuble";

const MyProjects = ({ image, name, link1, link2, link3, details, des1, des2, des3, technology1,technology2, technology3,technology4, technology5, technology6 }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            className="flex flex-col items-start space-y-5 bg-[#161042] shadow-lg px-5 py-10  lg:p-16 rounded-2xl"
        >
            <div className="flex-none w-full h-96 image-wrapper -translate-y-4   hover:translate-y-150 overflow-hidden rounded-xl ">
                <img
                    src={image}
                    alt="pic"
                    className="rounded-md hover:-translate-y-[80%]  transform w-full transition-all  duration-[8s] ease-in-out "
                />
            </div>
            <div className="flex flex-col items-start mt-10">
                <div>
                    <h2 className="text-2xl py-5 text-gray-500 uppercase ">{name}</h2>
                    <hr className="border-b-2 border-gray-600 w-full" />
                </div>
                <p className="text-gray-500 text-[15px] text-start mt-3">{details}</p>
                <div className="flex items-baseline text-[20px] pt-3 gap-3">
                    <FaCheckCircle className="text-blue-700"></FaCheckCircle>
                    <span className="text-gray-500 text-[13px]">{des1}</span>
                </div>
                <div className="flex items-baseline text-[20px] pt-3 gap-3">
                    <FaCheckCircle className="text-blue-700"></FaCheckCircle>
                    <span className="text-gray-500 text-[13px]">{des2}</span>
                </div>
                <div className="flex items-baseline text-[20px] pt-3 gap-3">
                    <FaCheckCircle className="text-blue-700"></FaCheckCircle>
                    <span className="text-gray-500 text-[13px]">{des3}</span>
                </div>
            </div>
            <div className="md:flex items-baseline justify-start space-y-4 gap-5 mt-5">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 shadow-sm text-sm lg:text-lg rounded-md px-4 py-1 shadow-blue-500 hover:shadow hover:shadow-blue-500 bg-blue-800 text-white flex gap-2 items-center"
                >
                    <FaGithub></FaGithub>
                    <Link className="" to={link1}>
                        Client Side
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 shadow-sm text-sm lg:text-lg rounded-md px-4 py-1 shadow-blue-500 hover:shadow hover:shadow-blue-500 bg-blue-800 text-white flex gap-2 items-center"
                >
                    <FaGithub></FaGithub>
                    <Link className="" to={link2}>
                        Server Side
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 shadow-sm text-sm lg:text-lg rounded-md px-4 py-1 shadow-blue-500 hover:shadow hover:shadow-blue-500 bg-blue-800 text-white flex gap-2 items-center"
                >
                    <FaRProject></FaRProject>
                    <Link className="" to={link3}>
                        Live Side
                    </Link>
                </motion.div>
            </div>
            <div>
                <h2 className="text-sm text-gray-700 font-medium">Technologies</h2>
                <div className=" flex flex-wrap gap-5">
                <TechnologiesBuble image={technology1}></TechnologiesBuble>
                <TechnologiesBuble image={technology2}></TechnologiesBuble>
                <TechnologiesBuble image={technology3}></TechnologiesBuble>
                <TechnologiesBuble image={technology4}></TechnologiesBuble>
                <TechnologiesBuble image={technology5}></TechnologiesBuble>
                <TechnologiesBuble image={technology6}></TechnologiesBuble>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
