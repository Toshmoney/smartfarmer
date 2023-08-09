import React from 'react'
import Getfundprops from './Getfundprops'

const Getfund = () => {
  return (
    <div className='container flex gap-x-[10rem]'>
        <div className='text-left flex flex-col gap-3 bg-green-200 rounded-3xl w-1/2'>
            <h3 className='head'>The Best place to get Fund for your Agriculturer Business</h3>
            <p className='word'>We Give Loans to Founders, Business Owners, Farmers to Grow their Business in a Profitable way</p>
            <div>
                <button className='btn text-white'>Get Started</button>
            </div>
        </div>
        <div className='lg:grid grid-cols-2 gap-4 w-1/2'>
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
                number = '01.'
                title = "User-Friendly Interfaces"
                word = 'We Provide Intuitive and Seamless user Interface.' 
            />
        </div>
    </div>
  )
}

export default Getfund