import banner from '../../../assets/Images/banner.png'
import { FcDownload } from "react-icons/fc";
import { useEffect, useState } from "react";
import resume from '../../../assets/rijwan-jannat-resume.pdf'


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

  return <span>{displayText +' |'}</span>;
};

const Banner = () => {
  return (
    <div className='hero max-h-screen mb-20 bg-gray-300 bg-opacity-10 py-10 px-5 rounded-md'>
      <div className='lg:flex items-center gap-16 justify-between'>
        <img className='rounded-full shadow-md bg-blue-950 bg-opacity-60 w-[300px] lg:w-4/12' src={banner} alt="" />
        <div className='p-2'>
          <h1 className="mb-2 md:mb-10 text-xl md:text-4xl text-blue-400 font-bold">Hey dear! <br /> This is Rijwan ,<br />Works at{'-'}
           <span className='gradient-animation'> <Typewriter
              texts={['MREN stack developer', 'Front-end developer']}
              delay={150}
              loop={true}
            /></span>
          </h1>
          <p className="mb-2 md:mb-5 text-[14px] font-thin text-gray-500">Highly motivated and enthusiastic Full Stack Developer with experience in designing, developing and maintaining web applications using technologies such as JavaScript, React,Express.js, Node.js.</p>
          <a href={resume} download={'rijwan-jannat-resume.pdf'} className="btn text-gray-500 border-0 bg-slate-100 bg-opacity-10 shadow-sm shadow-black hover:bg-slate-50 hover:bg-opacity-5">Download Resume <FcDownload size={26} /></a>
        </div>
      </div>
    </div>
  );
};

export default Banner;