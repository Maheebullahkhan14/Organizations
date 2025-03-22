import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import WhatWeDoSection from '../components/WhatwedoSection'
import HowYouCanHelp from '../components/HowcanHelp'
import WhyItMatters from '../components/WhymatterSection'

const Home = () => {
  return (
    <div className='suborganzation-youth-main-cover-wrapper'>
      <HeroSection/>
      <AboutSection/>
      <WhatWeDoSection/>
      <WhyItMatters/>
      <HowYouCanHelp/>
    </div>
  )
}

export default Home
