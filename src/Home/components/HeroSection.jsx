import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { heroRocketArrowIcon, heroRocketIcon, heroUpArrowIcon, heroAnnouncmentIcon, heroAnnouncmentArrowIcon, heroTargetArrowIcon, heroTargetIcon, heroSocialInsta, heroSocialFb, heroSocialLinkedin, heroSocialTikTok, heroSocialYt } from '../../assets';
import { Link } from 'react-router-dom';
import { motion , useAnimation } from "framer-motion";

const HeroSection = () => {


  const AnimatedCounter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 200000;
      const duration = 4000; // 2 seconds animation
      const stepTime = Math.abs(Math.floor(duration / target));

      const timer = setInterval(() => {
        start += Math.ceil(target / 100); // Smooth increment
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, [target]);

    return <motion.span>{count.toLocaleString()}</motion.span>;
  };






  return (
    <div className='hero-section-main-cover-wrapper container mx-auto px-4 min-h-[70vh]'>
      <div className='hero-content-title-section-cover-wrapper relative'>
        <h1 className='text-[40px] w-[55vw] text-center mx-auto mt-20'>From Words to Wins Content That Elevates Your <span> Business.</span></h1>
        <p className='w-[30vw]  text-[18px] mx-auto text-[#CBCBCB]'>Professional video production & branding that makes you unforgettable.</p>
        <button className='flex mx-auto mt-[20px] cta-btn-box'>Get Started
          <span><FaArrowRight /></span>
        </button>
        <div className='social-links-box-main-cover-wrapper'>
          <ul>
            <li className='flex flex-row mx-auto mt-6 justify-center'>
              <Link className='flex flex-row mx-3 my-3 w-[25px]'>
                <img src={heroSocialFb}></img>
              </Link>
              <Link className='flex flex-row mx-3 my-3 w-[25px]'>
                <img src={heroSocialYt}></img>
              </Link>
              <Link className='flex flex-row mx-3 my-3 w-[25px]'>
                <img src={heroSocialInsta}></img>
              </Link>
              <Link className='flex flex-row mx-3 my-3 w-[25px]'>
                <img src={heroSocialLinkedin}></img>
              </Link>
              <Link className='flex flex-row mx-3 my-3 w-[25px]'>
                <img src={heroSocialTikTok}></img>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hero-metrics-content-box-cover">
          {/* First Counter */}
          <div className="hero-metrics-content-box text-start w-[250px] absolute top-[-55px] left-[-30px]">
            <div className="hero-metics-img-cover flex items-center">
              <img className='w-[60px] animate-[floatUpDown_2s_ease-in-out_infinite]' src={heroRocketIcon} alt="" />
              <img className='w-[150px] rotate-[-20deg]' src={heroRocketArrowIcon} alt="" />
            </div>
            <div className="hero-metrics-count-box">
              <h6 className='flex'>
                <AnimatedCounter target={4483593} />
                <span><img src={heroUpArrowIcon} alt="" /></span>
              </h6>
              <p>views</p>
            </div>
          </div>

          {/* Second Counter */}
          <div className="hero-metrics-content-box text-start w-[250px] absolute bottom-[0px] left-[120px]">
            <div className="hero-metics-img-cover flex items-center">
              <img className='w-[60px] animate-[floatUpDown_2s_ease-in-out_infinite]' src={heroAnnouncmentIcon} alt="" />
              <img className='w-[100px] rotate-[20deg] ml-[45px]' src={heroAnnouncmentArrowIcon} alt="" />
            </div>
            <div className="hero-metrics-count-box">
              <h6 className='flex'>
                <AnimatedCounter target={8057375} />
                <span><img src={heroUpArrowIcon} alt="" /></span>
              </h6>
              <p>views</p>
            </div>
          </div>

          {/* Third Counter */}
          <div className="hero-metrics-content-box flex flex-center items-center flex-col column w-[250px] absolute top-[45px] right-[-30px]">
            <div className="hero-metics-img-cover flex items-center">
              <img className='w-[80px] rotate-[0deg] top-[40px] absolute left-[-40px]' src={heroTargetArrowIcon} alt="" />
              <img className='w-[60px] mb-[15px] animate-[floatUpDown_2s_ease-in-out_infinite]' src={heroTargetIcon} alt="" />
            </div>
            <div className="hero-metrics-count-box">
              <h6 className='flex'>
                <AnimatedCounter target={31418216} />
                <span><img src={heroUpArrowIcon} alt="" /></span>
              </h6>
              <p>views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
