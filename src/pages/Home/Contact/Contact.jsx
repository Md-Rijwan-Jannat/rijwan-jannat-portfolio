import { FaMailBulk } from "react-icons/fa"
import SectionTitle from "../../../components/Share/SectionTitle/SectionTitle"
import { Helmet } from "react-helmet"
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

export const MyComponent = () => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    />
)
const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="my-16">
            <SectionTitle title={'Contact'} icon={<FaMailBulk />} />
            <Helmet><title>Rijwan jannat | Contact</title></Helmet>
                <div className="flex flex-col items-center bg-[#161042] shadow-lg py-10 mx-5  lg:p-16 rounded-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 rounded-md">
                        <div className="flex flex-col gap-5 w-full">
                            <div className="w-full mb-4">
                                <h4 className="text-xl text-gray-500 uppercase mb-2">Your Name *</h4>
                                <input className="px-2 w-full rounded-md aria-selected:border-2 bg-blue-100 bg-opacity-10 text-gray-500 py-2 border-blue-800" {...register("name")} type="text" placeholder="Enter You Name" />
                            </div>
                            <div className="w-full mb-4">
                                <h4 className="text-xl text-gray-500 uppercase mb-2">Your Email *</h4>
                                <input className="px-2 w-full rounded-md aria-selected:border-2 bg-blue-100 bg-opacity-10 text-gray-500 py-2 border-blue-800" {...register("email")} type="email" placeholder="Enter You email" />
                            </div>
                            <div className="w-full mb-4">
                                <h4 className="text-xl text-gray-500 uppercase mb-2">Your Message *</h4>
                                <textarea className="px-2 w-full rounded-md aria-selected:border-2 bg-blue-100 bg-opacity-10 text-gray-500 py-2 border-blue-800" {...register("message")} type="text" placeholder="Text Message" rows={4} />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="shadow-sm text-sm lg:text-lg  rounded-md px-5 py-1 shadow-black bg-opacity-50 bg-[#12104d] text-gray-500 text-center"
                            >
                                <input className="" type="submit" />
                            </motion.div>
                        </div>
                    </form>

                    <div className=" flex flex-col space-y-5 mt-10 justify-start gap-2">
                        <div className="lg:flex lg:gap-5">
                            <h2 className="text-xl text-gray-500 uppercase mb-2 flex gap-3"><MdEmail size={30} /> Send Your mail</h2>
                            <a className="text-gray-400 ml-5 link link-primary" href="mailto:rijwanjannat36@gmail.com">rijwanjannat36@gmail.com</a>
                        </div>
                        <div className="lg:flex lg:gap-5">
                            <h2 className="text-xl text-gray-500 uppercase mb-2 flex gap-3"><AiFillPhone size={30} /> Call me</h2>
                            <a className="text-gray-400 ml-5" href=""> (+880) 1797660947</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Contact;