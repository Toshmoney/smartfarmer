import React from 'react'
import Hero from './Hero/Hero'
import Header from './Header/Header'
import Getfund from './GetFund/Getfund'
import Streamline from './GetFund/Streamline'

const Landingpage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Getfund/>
        <Streamline/>
    </div>
  )
}

export default Landingpage