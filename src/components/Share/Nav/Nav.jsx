import { FaMailBulk, FaSearchLocation } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <ul className="menu menu-horizontal bg-slate-100 bg-opacity-10  fixed bottom-0 right-0 w-full flex justify-between ">
            <li>
                <Link to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </Link>
            </li>
            <li>
                <Link to={'skills'}>
                    <GiSkills className="h-5 w-5 text-blue-600"/>
                </Link>
            </li>
            <li>
                <Link to={'projects'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </Link>
            </li>
            <li>
                <Link to={'about'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </Link>
            </li>
            <li>
                <Link to={'location'}>
                   <FaSearchLocation className="h-5 w-5 text-blue-600"/>
                </Link>
            </li>
            <li>
                <Link to={'Contact'}>
                  <FaMailBulk className="h-5 w-5 text-blue-600"/>
                </Link>
            </li>
        </ul>
    );
};

export default Nav;