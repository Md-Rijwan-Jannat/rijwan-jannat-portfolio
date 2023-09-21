import { FaMailBulk } from "react-icons/fa"
import SectionTitle from "../../../components/Share/SectionTitle/SectionTitle"
import { Helmet } from "react-helmet"
import { motion } from 'framer-motion';
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast } from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const MyComponent = () => (

    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    />
)
const Contact = () => {
    const form = useRef();
    useEffect(() => {
        AOS.init();
    }, []);

    const sendEmail = (e) => {
        const from = e.target;
        e.preventDefault();
        toast.loading('Loading...')
        emailjs.sendForm('service_a83mwk4', 'template_sotaxch', form.current, 'wTuP0_-qh1sVDIcjH')
            .then((result) => {
                console.log(result.text);
                toast.dismiss();
                from.reset()
                toast.success('Email successfully send !')
            }, (error) => {
                console.log(error.text);
                toast.error('Something went wrong!')
            });
    };


    return (
        <div className="my-16">
            <SectionTitle title={'Contact'} icon={<FaMailBulk />} />
            <Helmet><title>Rijwan jannat | Contact</title></Helmet>
            <div data-aos="zoom-in" className="flex flex-col bg-[#161042] shadow-lg py-10  lg:p-16 rounded-2xl">
                <h2 className='text-2xl font-semibold text-gray-500 text-center px-5 border-b-2 pb-2 border-gray-600 '>Send Your Mail</h2>
                <form ref={form} onSubmit={sendEmail} className="w-full p-5 lg:w-10/12 rounded-md">
                    <div className="flex flex-col gap-5 w-full">
                        <div className="w-full mb-4">
                            <h4 className="text-xl text-gray-500 uppercase mb-2">Your Name *</h4>
                            <input required className="pl-5 w-full rounded-md focus:outline-blue-800 bg-blue-100 bg-opacity-10 text-gray-500 py-4" name="name" type="text" placeholder="Enter You Name" />
                        </div>
                        <div className="w-full mb-4">
                            <h4 className="text-xl text-gray-500 uppercase mb-2">Your Email *</h4>
                            <input required className="pl-5 w-full rounded-md focus:outline-blue-800 bg-blue-100 bg-opacity-10 text-gray-500 py-4" name="email" type="email" placeholder="Enter You email" />
                        </div>
                        <div className="w-full mb-4">
                            <h4 className="text-xl text-gray-500 uppercase mb-2">Your Message *</h4>
                            <textarea required className="pl-5 w-full rounded-md focus:outline-blue-800 bg-blue-100 bg-opacity-10 text-gray-500 py-4" name="message" type="text" placeholder="Text Message" rows={5} />
                        </div>

                        <motion.div
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 0.9 }}
                            className=" bg-gray-300 bg-opacity-5 text-gray-500 md:w-1/3  shadow hover:shadow-md hover:shadow-blue-500 shadow-blue-500 flex items-center hover:shadow-[box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;] justify-center p-2 rounded-md"
                        >
                            <input required className="py-4 rounded-xl font-bold uppercase" type="submit" />
                        </motion.div>
                    </div>
                </form>

                <div className=" space-y-5 pl-5 mt-10">
                    <div className="flex gap-5 items-center">
                        <MdEmail className="bg-gray-300 text-gray-400 bg-opacity-5 shadow shadow-blue-500 flex items-center w-10 h-10 p-2 rounded-md" size={30} />
                        <div>
                            <h2 className="text-xl text-gray-500 uppercase mb-2 flex gap-3"> Send Your mail</h2>
                            <a className="text-gray-400 link link-primary" href="mailto:rijwanjannat36@gmail.com">rijwanjannat36@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <AiFillPhone className="bg-gray-300 text-gray-300 bg-opacity-5 shadow shadow-blue-500 flex items-center w-10 h-10 p-2 rounded-md" size={30} />
                        <div>
                            <h2 className="text-xl text-gray-500 uppercase mb-2 flex gap-3">Call me</h2>
                            <a className="text-gray-400" href=""> (+880) 1797660947</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;