import React from 'react'
import Hero from '../components/Hero'
// import HeroMedia from '../components/HeroMedia'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import CTASection from '../components/CTASection'
import StudyCatalog from '../components/StudyCatalog'
import FeaturesSection from '../components/FeaturesSection'
import BecomeInstructor from '../components/BecomeInstructor'
import Review from '../components/Review'
import PopularCources from '../components/PopularCources'

const Home = () => {
  return (
    <div className='bg-[#000814] min-h-screen'>
      <Hero />
     
      <SectionOne/>
      <SectionTwo/>
      <PopularCources/>
      <CTASection/>
      <StudyCatalog/>
      <FeaturesSection/>
      <BecomeInstructor/>
      <Review/>


      
    </div>
  )
}

export default Home
