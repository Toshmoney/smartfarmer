import React from 'react'
import img1 from '../../Images/Component 7.png'
import img2 from '../../Images/Component 6.png'
import img3 from '../../Images/Component 5.png'

const Aboutus = () => {
  return (
    <div className='px-20 mb-[20rem]'>
        <div className='container capitalize nunito lg:text-left items-center text-center lg:items-start lg:w-full flex flex-col '>
            <h1 className='lg:w-[35%] font-extrabold lg:text-[45px] text-[20px]'>what farmers are saying about us</h1>
            <p className='capitalize nunito text-xl text-[grey]'>request a loan and get money to your balance</p>
            <div className='gap-7 mt-7 flex flex-col lg:flex lg:flex-row w-full lg:justify-between lg:mt-28 '>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Aboutus;
