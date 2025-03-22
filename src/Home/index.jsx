import React from 'react'
import HeroSection from './components/HeroSection'
import WhatweDo from './components/WhatweDo'
import VideosScroll from './components/VideosScroll'
import CustomerStory from './components/CustomerTestimonial'
import FAQSection from './components/FaqSection'
import Footer from './components/Footer'
import ScrollStripSection from './components/ScrollStripSection'
import Header from './components/Header'
import WhoweAre from './components/WhoweAre'
import ContactSection from './components/ContactSection'
import ClientsCount from './components/ClientsCount'


const Home = () => {
  return (
    <div className='main-app'>
      <Header/>
      <HeroSection/>
      <ScrollStripSection/>
      <WhoweAre/>
      <ClientsCount/>
      <VideosScroll/>
      <WhatweDo/>
      <CustomerStory/>
      <ContactSection/>
      <FAQSection/>
      <Footer />
    </div>
  )
}

export default Home  
