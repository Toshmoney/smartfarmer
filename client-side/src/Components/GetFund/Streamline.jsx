import React, { useEffect } from 'react'
import Quickprops1 from './Quickprops1';
import quick from '../../Images/Group 4.png'
import support from '../../Images/Group 5.png'
import Quickprops2 from './Quickprops2';
import payment from '../../Images/Group 4 (1).png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Streamline = () => {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <div data-aos="fade-right" className='container w-full'>
        <Quickprops1 
          image= {quick}
          heading = 'Quick and Streamlined Loan Application Process'
          paragraph= 'easy access to 5million worth of loan for your business. we give loans to founders, business owners, farmers to grow their business in a profitable way.'
          button = 'Get Started'
        />
        <Quickprops2
          heading = 'Flexible Repayment Options'
          paragraph = 'easy access to 5million worth of loan for your business. we give loans to founders, business owners, farmers to grow their business in a profitable way.'
          image = {payment}
        />
        <Quickprops1
          image = {support}
          heading = "Personalized Support and Advisory Services"
          paragraph = 'easy access to 5million worth of loan for your business. we give loans to founders, business owners, farmers to grow their business in a profitable way.'
          button = 'Get Started'
        />
    </div>
  )
}

export default Streamline;