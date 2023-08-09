

const Container = ({ children }) => {
    return (
        <div className='max-w-[2500px] mx-auto xl:px-20 md:px-10 px-6 bg-slate-800 bg-opacity-5'>
            {children}
        </div>
    );
};

export default Container;