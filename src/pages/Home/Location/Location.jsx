import { FaSearchLocation } from 'react-icons/fa';
import SectionTitle from '../../../components/Share/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { setLogLevel } from 'firebase/app';

const Location = () => {
    const center = [24.8484, 89.3739]; // Latitude and Longitude of Bogura, Bangladesh

    return (
        <div className="mb-10">
            <SectionTitle title={'Location'} icon={<FaSearchLocation />} />
            <Helmet>
                <title>Rijwan jannat | Location</title>
            </Helmet>
            <div className="flex flex-col items-center space-y-5 bg-[#161042] shadow-lg px-5 py-10 mx-5 lg:p-16 rounded-2xl">
                <h2 className='text-2xl font-semibold text-gray-500 text-center px-5 border-b-2 pb-2 border-gray-600 '>My location</h2>
                <MapContainer className='w-full h-[200px] lg:h-[400px]' center={center} boundsOptions={setLogLevel} zoom={14} style={{ borderRadius: '20px' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={center} />
                </MapContainer>
            </div>
        </div>
    );
};

export default Location;
