import React from 'react'
import Hero from './Hero/Hero'
import Header from './Header/Header'
import Getfund from './GetFund/Getfund'
import Streamline from './GetFund/Streamline'
import Eligibility from './Eligibility/Eligibility'
import Getstarted from './Getstarted/Getstarted'
import Aboutus from './Aboutus/Aboutus'

const Landingpage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Getfund/>
      <Streamline/>
      <Eligibility/>
      <Getstarted/>
      <Aboutus/>
    </div>
  )
}

export default Landingpage