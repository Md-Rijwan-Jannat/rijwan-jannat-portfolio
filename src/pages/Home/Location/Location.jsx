import { FaSearchLocation } from 'react-icons/fa';
import SectionTitle from '../../../components/Share/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { setLogLevel } from 'firebase/app';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Location = () => {
    const center = [24.8484, 89.3739];
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="mb-10">
            <SectionTitle title={'Location'} icon={<FaSearchLocation />} />
            <Helmet>
                <title>Rijwan jannat | Location</title>
            </Helmet>
                <div data-aos="flip-down" className="flex flex-col items-center space-y-5 bg-[#161042] shadow-lg px-5 py-10 mx-5 lg:p-16 rounded-2xl">
                    <h2 className='text-2xl font-semibold text-gray-500 text-center px-5 border-b-2 pb-2 border-gray-600 '>My location</h2>
                    <div className='md:flex w-full gap-10'>
                        <MapContainer className='w-full h-[200px] lg:h-[400px]' center={center} boundsOptions={setLogLevel} zoom={14} style={{ borderRadius: '20px' }}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={center} />
                        </MapContainer>
                        <div className='w-full'>
                            <div className='mb-5'>
                            <h2 className='text-4xl text-gray-500 mb-1'>Location</h2>
                            <hr className='border-gray-500 border-2 mb-2' />
                            <span className='text-2xl text-gray-500 mb-[24px] gradient-animation'>Baroanjul, Noymile road, Shajahanpur, Bogura, Bangladesh</span>
                            </div>
                            <h3 className='text-2xl text-gray-500 mb-1'>About Bogura, Bangladesh</h3>
                            <hr className='border-gray-500 border-4' />
                            <p className='text-start text-gray-500'> Bogura, also known as Bogra, is a city located in the northern part of Bangladesh. It is the largest city in the Bogura District and serves as an important economic and cultural center in the region Bogura is situated in the Rajshahi Division of Bangladesh. It is located approximately 203 kilometers northwest of the capital city, Dhaka. The city is surrounded by lush agricultural land, and the region is known for its fertile soil.</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Location;
