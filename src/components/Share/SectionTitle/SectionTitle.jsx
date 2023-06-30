
const SectionTitle = ({ title, icon }) => {
    return (
        <div className="flex flex-col items-center gradient-animation mb-10">
            <div className="flex flex-col items-center w-11/12 lg:w-5/12 justify-center text-center bg-gray-300 bg-opacity-10 px-5 py-2 rounded-md font-bold border">
                <h1 className="text-2xl uppercase font-mono">{`</${title}>`}</h1>
                <p className="border shadow rounded-md font-mono px-2 py-1">{icon}</p>
                <p>{''}</p>
            </div>
        </div>
    );
};

export default SectionTitle;