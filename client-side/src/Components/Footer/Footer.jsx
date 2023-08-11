import React from 'react'
import ellipse from '../../Images/Ellipse 18.png'
import ellipse2 from '../../Images/Ellipse 19.png'
import ellipse3 from '../../Images/Ellipse 22.png'
import ellipse4 from '../../Images/Ellipse 20.png'
const Footer = () => {
  return (
    <div>
        <div className='relative bg-[#35CD8D] overflow-hidden w-[60%] items-center flex flex-col py-[8rem] z-10 rounded-3xl'>
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
        <div className='w-full bg-[black] py-36'>

        </div>
    </div>
  )
}

export default Footer