import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import WhatWeDoSection from '../components/WhatwedoSection'
import HowYouCanHelp from '../components/HowcanHelp'
import WhyItMatters from '../components/WhymatterSection'
import Footer from '../components/FooterSection'
import Testimonials from '../components/Testimonials'

const Home = () => {
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
