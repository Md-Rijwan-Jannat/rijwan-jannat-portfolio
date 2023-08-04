
import { GiSkills } from 'react-icons/gi';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/Share/SectionTitle/SectionTitle';
import FrontEndFeatures from '../../../components/Share/FrontEndFeatures/FrontEndFeatures';
import html from '../../../assets/Images/html-removebg-preview.png';
import css from '../../../assets/Images/css-removebg-preview.png';
import react from '../../../assets/Images/react-removebg-preview.png';
import javascript from '../../../assets/Images/Javascript.png';
import tailwind from '../../../assets/Images/tawilwind-removebg-preview (1).png';
import react_router from '../../../assets/Images/react_router.svg';
import bootstrap from '../../../assets/Images/bootstrap-removebg-preview.png';
import firebase from '../../../assets/Images/firebase-removebg-preview.png';
import query from '../../../assets/Images/query.png';
import next_js from '../../../assets/Images/next_js.png';
import express from '../../../assets/Images/express-removebg-preview.png';
import node from '../../../assets/Images/node-removebg-preview.png';
import mongoDb from '../../../assets/Images/mongoDb-removebg-preview.png';
import jwt from '../../../assets/Images/jwt-removebg-preview (2).png';
import typescript from '../../../assets/Images/Ts-removebg-preview (2).png';
import redux from '../../../assets/Images/redux-removebg-preview.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

export const MyComponent = () => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    />
)

const SkillsAndTechnologies = () => {
    const [activeButton, setActiveButton] = useState('category1');


    const handleButtonClick = (category) => {
        setActiveButton(category);
    };

    return (
        <div className="mb-10">
            <SectionTitle title={'Skills and Technologies'} icon={<GiSkills />} />
            <Helmet><title>Rijwan jannat | Skills</title></Helmet>
            <Tabs>
                <TabList className={'flex gap-10 items-center justify-center mb-7'}>
                    <Tab className={'border-none'}>
                        <p
                            className={`btn border-0 bg-slate-100 bg-opacity-10 shadow shadow-black hover:bg-slate-50 hover:bg-opacity-5 text-gray-500 ${activeButton === 'category1' ? 'text-green-600' : ''
                                }`}
                            onClick={() => handleButtonClick('category1')}
                        >
                            {' '}
                            Frontend
                        </p>
                    </Tab>
                    <Tab className={'border-none'}>
                        <p
                            className={`btn border-0 bg-slate-100 bg-opacity-10 shadow shadow-black hover:bg-slate-50 hover:bg-opacity-5 text-gray-500 ${activeButton === 'category2' ? 'text-green-600' : ''
                                }`}
                            onClick={() => handleButtonClick('category2')}
                        >
                            {' '}
                            Backend
                        </p>
                    </Tab>
                </TabList>

                <TabPanel>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={html} title={'html'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={css} title={'css'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={react} title={'react'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={javascript} title={'javascript'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={tailwind} title={'tailwind css'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={react_router} title={'react router'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={bootstrap} title={'bootstrap'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={firebase} title={'firebase'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={query} title={'tanStack query'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={next_js} title={'next js'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={typescript} title={'typescript'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={redux} title={'redux'} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </TabPanel>
                <TabPanel>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={express} title={'express.js'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={node} title={'node.js'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={mongoDb} title={'mongoDb'} />
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="my-card"
                            >
                                <FrontEndFeatures image={jwt} title={'jwt'} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SkillsAndTechnologies;

// import { motion } from "framer-motion";

// const MyCard = () => (
//     <motion.div
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="my-card"
//     >
//         {/* Add your card content here */}
//         <h2>Card Title</h2>
//         <p>This is a card description.</p>
//     </motion.div>
// );

// export default MyCard;

