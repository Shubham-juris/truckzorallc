import React from 'react'
import Hero from '../components/Homecomponents/Hero'
import AboutSection from '../components/Homecomponents/AboutSection'
import ServicesSection from '../components/Homecomponents/ServicesSection'
import FleetSection from '../components/Homecomponents/FleetSection'
import WhyChooseUs from '../components/Homecomponents/WhyChooseUs'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <AboutSection/>
      <ServicesSection/>
      <FleetSection/>
      <WhyChooseUs/>
    </>
  )
}

export default HomePage
