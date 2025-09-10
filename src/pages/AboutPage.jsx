import React from 'react'
import AboutSection from '../components/aboutcomponent/AboutSection'
import MissionVision from '../components/aboutcomponent/MissionVision'
import CoreValues from '../components/aboutcomponent/CoreValues'
import WhyChooseUs from '../components/aboutcomponent/WhyChooseUs'
import GlobalPresence from '../components/aboutcomponent/GlobalPresence'
import Certifications from '../components/aboutcomponent/Certifications'

const AboutPage = () => {
  return (
    <>
      <AboutSection/>
      <MissionVision/>
      <CoreValues/>
      <WhyChooseUs/>
      <GlobalPresence/>
      <Certifications/>
    </>
  )
}

export default AboutPage
