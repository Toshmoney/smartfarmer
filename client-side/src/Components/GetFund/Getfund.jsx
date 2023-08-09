import React from 'react'
import Getfundprops from './Getfundprops'

const Getfund = () => {
  return (
    <div className='container p-x-xl flex flex-col lg:flex lg:flex-row lg:gap-x-[12rem]'>
        <div className='w-full md:w-full text-center flex flex-col gap-3 bg-green-200 rounded-3xl lg:w-1/2 md:text-center lg:text-left justify-center px-10 mb-11 py-10'>
            <h3 className='head lg:w-[78%]'>The Best place to get Fund for your Agriculturer Business</h3>
            <p className='word lg:w-[78%]'>We Give Loans to Founders, Business Owners, Farmers to Grow their Business in a Profitable way</p>
            <div className='w-full md:w-full text-center lg:text-left'>
                <button className='btn text-white'>Get Started</button>   
            </div>
        </div>
        <div className='lg:grid grid-cols-2 gap-6 lg:w-1/2 flex flex-col md:justify-center md:text-center'>
            <Getfundprops
                number = '01.'
                title = "Ease And Efficiency"
                word = 'We Provide Ease and Efficiency Throughout the Loan Process.' 
            />
            <Getfundprops
                number = '02.'
                title = "Minimal Documentation"
                word = 'We request for Minimal Documentation from Farmers.' 
            />
            <Getfundprops
                number = '03.'
                title = "Save Time & Effort"
                word = 'We Save the Time and Effort of Our Users Through the process.' 
            />
            <Getfundprops
                number = '04.'
                title = "User-Friendly Interfaces"
                word = 'We Provide Intuitive and Seamless user Interface.' 
            />
        </div>
    </div>
  )
}

export default Getfund