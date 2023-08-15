import banner from '../../../assets/Images/banner.png'
import { FcDownload } from "react-icons/fc";
import { useEffect, useState } from "react";
// import resume from '../../../assets/Rijwan_MERN Stack Developer.pdf'
import spinner from '../../../assets/Images/react-removebg-preview.png'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Typewriter = ({ texts, delay = 150, loop = true }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prevText) => prevText.slice(0, -3));

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }, delay);
    } else {
      const currentText = texts[currentIndex];
      const length = displayText.length;
      const nextChar = currentText[length];

      timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + nextChar);

        if (length === currentText.length - 1) {
          setIsDeleting(true);
          clearTimeout(timer);
        }
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, delay, displayText, isDeleting, texts]);

  useEffect(() => {
    if (!loop && currentIndex === texts.length - 1 && isDeleting) {
      setIsDeleting(false);
    }
  }, [currentIndex, loop, isDeleting, texts]);

  return <span>{displayText + ' |'}</span>;
};

const Banner = () => {
  return (
    <div className='hero md:max-h-screen mb-20 bg-gray-300 bg-opacity-10 py-10 px-5 rounded-md'>
      <div className='lg:flex items-center gap-16 justify-between'>
        <div className='spinner' style={{ backgroundImage: `url(${spinner})`}} > </div>
          <img className='rounded-full w-full gradient-animation shadow-lg hover:shadow-2xl hover:shadow-blue-500 transition duration-1000 ease-in-out bg-opacity-10 shadow-blue-300 md:w-4/12' src={banner} alt="" />
        <div className='p-2'>
          <h1 className="mb-2 md:mb-10 text-xl md:text-4xl text-blue-400 font-bold">Hey dear! <br /> This is Rijwan ,<br />Works at{'-'}
            <span className='gradient-animation'> <Typewriter
              texts={['MREN stack developer', 'Front-end developer', 'React developer']}
              delay={150}
              loop={true}
            /></span>
          </h1>
          <p className="mb-2 md:mb-5 text-[14px] font-thin text-gray-500">Highly motivated and enthusiastic Full Stack Developer with experience in designing, developing and maintaining web applications using technologies such as JavaScript, React,Express.js, Node.js.</p>
          <div className='flex flex-wrap gap-4'>
            <a href={'https://drive.google.com/file/d/1PCyp5gNrFC_c_XK_jKCPtwLQ5MfaAqoZ/view?usp=drive_link'} download={'rijwan-jannat-mern stack developer.pdf'} className="btn text-gray-500 border-0 bg-slate-100 bg-opacity-10 shadow-sm shadow-blue-500 hover:shadow hover:shadow-blue-500 hover:bg-slate-50 hover:bg-opacity-5">Download Resume <FcDownload size={26} /></a>
            <Link to={'contact'} className="btn text-gray-500 border-0 bg-slate-100 bg-opacity-10 shadow-sm shadow-blue-500 hover:shadow hover:shadow-blue-500  hover:bg-slate-50 hover:bg-opacity-5">Hire Me <FaArrowRight size={26} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;