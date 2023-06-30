import { FaCopyright } from 'react-icons/fa';
import rijwan_1 from '../../../assets/Images/Rijwan3.jpg'
import moment from 'moment/moment';

const Footer = () => {
    const currentYear = moment().format('Y');
    return (
        <div className='p-10 bg-[#120c3a] text-gray-500 pb-12 rounded-t-2xl'>
            <footer className="footer lg:grid">
                <div>
                    <span className="footer-title">Talk about us me!</span>
                    <div className="avatar online">
                        <div className="w-16 relative rounded-full">
                            <img className='absolute bgw' src={rijwan_1} />
                        </div>
                    </div>
                    <a className="link link-hover" href="">rijwanjannat36@gmail.com</a>

                </div>
                <div>
                    <span className="footer-title">About Us</span>
                    <a className="link link-hover">Who am I?</a>
                    <a className="link link-hover">My History</a>
                    <a className="link link-hover">Career</a>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <a className="link link-hover">Sahjahanpur, Bogura, Bangladesh</a>
                    <a className="link link-hover">rijwanjannat36@gmail.com</a>
                    <a className="link link-hover">(+880) 1797660947</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-gray-500 ">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input border bg-opacity-10 border-slate-800 w-f1/2 lg:w-full lg:pr-16" />
                            <button className="btn bg-blue-700 hover:bg-[#150c55] border-gray-500 text-slate-300 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <hr className='border-gray-600 my-8'/>
            <div className='divider divide-gray-600'>
               <p className='text-center flex gap-3 items-center'> <FaCopyright size={20}/> {currentYear} rijwan jannat, all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;