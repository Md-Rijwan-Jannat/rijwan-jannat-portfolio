import { CiMenuKebab } from "react-icons/ci";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import rijwan from '../../../assets/Images/Rijwan_profile.jpg'
import { FaArrowRight, FaFacebookSquare, FaGithubSquare, FaHome, FaInstagramSquare, FaLinkedin, FaMailBulk, FaSearchLocation } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiHobbitDoor, GiSkills } from "react-icons/gi";


export const MyComponent = () => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    />
)
const Navbar = () => {
    const link = <div className="font-semibold">
        <li><Link to={'/'}><FaHome size={20} className="text-blue-500" /> Home Page</Link></li>
        <li><Link to={'/skills'}><GiSkills size={20} className="text-blue-500" /> Skills</Link></li>
        <li><Link to={'/projects'}><GiHobbitDoor size={20} className="text-blue-500" /> Projects</Link></li>
        <li><Link to={'/about'}><FcAbout size={20} className="text-blue-500" /> About Me</Link></li>
        <li><Link to={'/location'}><FaSearchLocation size={20} className="text-blue-500" /> Location</Link></li>
        <li><Link to={'/contact'}><FaMailBulk size={20} className="text-blue-500" /> Contact</Link></li>
    </div>
    return (
        <div className="navbar bg-[#161042] mb-5 shadow-lg rounded-b-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn border-0 bg-slate-100 bg-opacity-10 shadow shadow-black hover:bg-slate-50 hover:bg-opacity-5">
                        <CiMenuKebab color="black" />
                    </label>
                    <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow-sm shadow-black bg-opacity-50 bg-[#12104d] text-gray-500 rounded-box w-52">
                        {link}
                    </ul>
                </div>
            </div>
            <div className="navbar-center gradient-animation">
                <div className="flex flex-col items-center">
                    <h1 className="normal-case text-xl font-mono">{"</MREN stack>"}</h1>
                    <p className="shadow rounded-md font-mono px-2 py-1">developer</p>
                    <p>{''}</p>
                </div>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-bottom dropdown-end ">
                    <label tabIndex={0}>
                        <div className="flex flex-col text-center items-center mx-2 px-4 py-2 rounded-md border-0 bg-slate-100 bg-opacity-10 shadow shadow-black hover:bg-slate-50 hover:bg-opacity-5">
                            <img className="rounded-full w-8 h-8" src={rijwan} alt="" />
                            <p className="text-[10px] flex flex-col items-center font-bold text-gray-500">Md Rijwan Jannat <FaArrowRight size={10} /></p>
                        </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content flex flex-row items-center gap-2 justify-center z-[1] menu p-2 shadow-sm shadow-black bg-opacity-50 bg-[#12104d] text-gray-500 rounded-box w-52">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                          <Link to={'https://www.linkedin.com/in/md-rijwan-jannat1'} className="bg-gray-300 shadow shadow-blue-50 flex items-center justify-center w-10 h-10 p-2 rounded-md">

                                <FaLinkedin className="text-blue-500" size={20} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to={'https://github.com/Md-Rijwan-Jannat'} className="bg-gray-300 shadow shadow-blue-50 flex items-center justify-center w-10 h-10 p-2 rounded-md">

                                <FaGithubSquare className="text-blue-500" size={20} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to={'https://www.facebook.com/profile.php?id=100086218014706'} className="bg-gray-300 shadow shadow-blue-50 flex items-center justify-center w-10 h-10 p-2 rounded-md">

                                <FaFacebookSquare className="text-blue-500" size={20} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to={'https://www.instagram.com/rijwanjannat/'} className="bg-gray-300 shadow shadow-blue-50 flex items-center justify-center w-10 h-10 p-2 rounded-md">

                                <FaInstagramSquare className="text-blue-500" size={20} />
                            </Link>
                        </motion.div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

