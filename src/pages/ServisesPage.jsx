import React from 'react'
import ServicesHero from '../components/servicesComponent/ServicesHero'
import ServiceCards from '../components/servicesComponent/ServiceCards'
import ProcessFlow from '../components/servicesComponent/ProcessFlow'
import ServiceFeatures from '../components/servicesComponent/ServiceFeatures'
import IndustriesWeServe from '../components/servicesComponent/IndustriesWeServe'
import ServicesCTA from '../components/servicesComponent/ServicesCTA'

const ServisesPage = () => {
  return (
    <>
      <ServicesHero/>
      <ServiceCards/>
      <ProcessFlow/>
      <ServiceFeatures/>
      <IndustriesWeServe/>
      <ServicesCTA/>
    </>
  )
}

export default ServisesPage
