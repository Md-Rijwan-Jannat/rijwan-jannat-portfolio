import { FaCopyright, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import rijwan_1 from '../../../assets/Images/Rijwan3.jpg'
import moment from 'moment/moment';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = moment().format('Y');
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    />
    return (
        <div className='p-5 md:p-10 bg-[#120c3a] text-gray-500 pb-12 rounded-t-2xl'>
            <footer className="lg:footer">
                <div className='flex space-y-2 flex-col mb-5'>
                    <span className="footer-title">Talk about us me!</span>
                    <div className="avatar online">
                        <div className="w-16  rounded-full">
                            <img className=' bgw md:mb-10' src={rijwan_1} />
                        </div>
                    </div>
                    <a className="link link-hover" href="">rijwanjannat36@gmail.com</a>

                </div>
                <div className='flex  flex-col mb-5'>
                    <span className="footer-title">About Us</span>
                    <a className="link link-hover">Who am I?</a>
                    <a className="link link-hover">My History</a>
                    <a className="link link-hover">Career</a>
                </div>
                <div className='flex  flex-col mb-5'>
                    <span className="footer-title">Contact Us</span>
                    <a className="link link-hover">Sahjahanpur, Bogura, Bangladesh</a>
                    <a className="link link-hover">rijwanjannat36@gmail.com</a>
                    <a className="link link-hover">(+880) 1797660947</a>
                </div>
                <div className='flex flex-col mb-5'>
                    <span className="footer-title">Social Media</span>
                    <div className="dropdown-content flex flex-row items-center gap-5 md:gap-10 z-[1] menu p-2 text-gray-500 mt-2">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to={'https://www.linkedin.com/in/md-rijwan-jannat1'} className="bg-gray-300 shadow shadow-blue-500 flex items-center hover:shadow-[box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;] justify-center w-10 h-10 p-2 rounded-md">

                                <FaLinkedin className="text-gray-500" size={20} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to={'https://github.com/Md-Rijwan-Jannat'} className="bg-gray-300 shadow shadow-blue-500 flex items-center hover:shadow-[box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;] justify-center w-10 h-10 p-2 rounded-md">

                                <FaGithubSquare className="text-gray-500" size={20} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to={'https://www.facebook.com/profile.php?id=100086218014706'} className="bg-gray-300 shadow shadow-blue-500 flex items-center hover:shadow-[box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;] justify-center w-10 h-10 p-2 rounded-md">

                                <FaFacebookSquare className="text-gray-500" size={20} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to={'https://www.instagram.com/rijwanjannat/'} className="bg-gray-300 shadow shadow-blue-500 flex items-center hover:shadow-[box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;] justify-center w-10 h-10 p-2 rounded-md">

                                <FaInstagramSquare className="text-gray-500" size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </footer>
            <hr className='border-gray-600 my-8' />
            <div className='divider divide-gray-600'>
                <div className='flex flex-wrap gap-3'>
                <FaCopyright size={20} />
                <p className=' '>  {currentYear} rijwan jannat, all rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;