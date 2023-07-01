import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MyComponent = () => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    />
)
const MyProjects = ({ image, name, link1, link2, link3, details }) => {
    return (
            <div className="flex flex-col items-center bg-[#161042] shadow-lg mb-7 mt-7 px-5 py-10 mx-5 lg:p-16 rounded-2xl">
                <div className="flex flex-col items-center">
                    <img className="rounded-xl lg:w-1/2" src={image} alt="" />
                    <div>
                        <h2 className="text-2xl py-5 text-gray-500 uppercase border-b border-gray-600">{name}</h2>
                    </div>
                    <p className="text-gray-500 text-sm text-center mt-3">{details}</p>
                </div>
                <div className="lg:flex items-baseline text-center space-y-4 gap-5 mt-5">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 shadow-sm text-sm lg:text-lg  rounded-md px-4 py-1 shadow-black bg-opacity-50 bg-[#12104d] text-gray-500"
                    >
                        <Link className="" to={link1}>Client Side</Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 shadow-sm text-sm lg:text-lg  rounded-md px-4 py-1 shadow-black bg-opacity-50 bg-[#12104d] text-gray-500"
                    >
                        <Link className="" to={link2}>Server Side</Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 shadow-sm text-sm lg:text-lg  rounded-md px-4 py-1 shadow-black bg-opacity-50 bg-[#12104d] text-gray-500"
                    >
                        <Link className="" to={link3}>Live Side</Link>
                    </motion.div>
                </div>
            </div>

    );
};

export default MyProjects;
