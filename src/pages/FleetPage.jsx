import React from 'react'
import FleetIntro from '../components/fleetcomponents/FleetIntro'
import FleetCategories from '../components/fleetcomponents/FleetCategories'
import FleetTechnology from '../components/fleetcomponents/FleetTechnology'
import DriverExpertise from '../components/fleetcomponents/DriverExpertise'
import FleetGallery from '../components/fleetcomponents/FleetGallery'
// import FleetStats from '../components/fleetcomponents/FleetStats'

const FleetPage = () => {
  return (
    <>
      <FleetIntro/>
      <FleetCategories/>
      <FleetTechnology/>
      <DriverExpertise/>
      <FleetGallery/>
      {/* <FleetStats/> */}
    </>
  )
}

export default FleetPage
