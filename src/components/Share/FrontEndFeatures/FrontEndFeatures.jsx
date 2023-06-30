

const FrontEndFeatures = ({ image, title }) => {
    return (
        <div className="mx-5 p-5">
            <div className="flex flex-col items-center aria-selected:bg-blue-500 justify-center bg-[#231769] bg-opacity-50 py-10 shadow shadow-blue-200 text-gray-600 p-3 rounded-lg ">
                <div className="border-4 rounded-full border-blue-500 p-4">
                    <img className="w-20 h-20" src={image} alt="" />
                </div>
                <h3 className="text-xl font-bold uppercase mt-2">{title}</h3>
            </div>
        </div>
    );
};

export default FrontEndFeatures;