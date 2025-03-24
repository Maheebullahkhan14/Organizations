import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import WhatWeDoSection from '../components/WhatwedoSection'
import HowYouCanHelp from '../components/HowcanHelp'
import WhyItMatters from '../components/WhymatterSection'
import Footer from '../components/FooterSection'
import Testimonials from '../components/Testimonials'
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {

  
useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });
}, []);


  return (
    <div className='suborganzation-youth-main-cover-wrapper'>
      <HeroSection/>
      <AboutSection/>
      <WhatWeDoSection/>
      <WhyItMatters/>
      <HowYouCanHelp/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
