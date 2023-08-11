import React from 'react'
import ellipse from '../../Images/Ellipse 18.png'
import ellipse2 from '../../Images/Ellipse 19.png'
import ellipse3 from '../../Images/Ellipse 22.png'
import ellipse4 from '../../Images/Ellipse 20.png'
import facebook from '../../Images/Group 14.png'
import twitter from '../../Images/Group 15.png'
import instagram from '../../Images/Group 16.png'
import link from '../../Images/Group 17.png'
const Footer = () => {
  return (
    <div>
      <div className='relative bg-[#35CD8D] overflow-hidden w-[60%] left-[20%] top-20 items-center flex flex-col py-[8rem] z-10 rounded-3xl'>
            <h1 className='capitalize text-white head lg:w-1/2'>our process is designed to make it easier for farmers</h1>
            <div>
                <button className='bg-white font-medium py-3 px-8 rounded-2xl hover:bg-green ease-in duration-200 text-green'>Get Started</button>
            </div>
              <img className='absolute bottom-[-2%] left-1' src={ellipse} alt="" />
              <img className='absolute top-[-2%] right-1' src={ellipse2} alt="" />
              <img className='absolute top-20 left-[20%]' src={ellipse3} alt="" />
              <img className='absolute top-[55%] right-[20%]' src={ellipse3} alt="" />
              <img className='absolute top-[41%] right-[57%]' src={ellipse4} alt="" />
          </div>
          <div className='w-full bg-[black] py-36 flex items-center justify-center'>
            <div className=' w-[60%] flex flex-col gap-10'>
              <div className='flex justify-between items-center'>
                <button className='btn text-white'>Smart farmer</button>
                <div className='flex gap-5'>
                  <a className='text-white' href=""><img src={facebook} alt="" /></a>
                  <a className='text-white' href=""><img src={twitter} alt="" /></a>
                  <a className='text-white' href=""><img src={instagram} alt="" /></a>
                  <a className='text-white' href=""><img src={link} alt="" /></a>
                </div>
              </div>
              <div className='w-full flex justify-between'>
                <div className='nunito text-white text-left leading-8'>
                  <p>Contact: info@smartfamers.com</p>
                  <p>Address: 5B taiwo road, ilorin, kwara nigeria.</p>
                </div>
                <div className='text-white text-left leading-8'>
                  <p><a href="">About us</a></p>
                  <p><a href="">How it works</a></p>
                  <p><a href="">Support</a></p>
                  <p><a href="">Blog</a></p>
                  <p><a href="">Terms of Services</a></p>
                </div>
                <div className='text-white text-left flex flex-col gap-5'>
                  <h4>Subscribe to Newsletter</h4>
                  <div className='flex flex-col gap-3'>
                    <input className='w-full rounded-xl py-2 flex items-center justify-center outline-none px-6' type="text" placeholder='Enter Email Address' />
                    <button className='btn w-full'>Subscribe Now</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
    </div>
  )
}

export default Footer