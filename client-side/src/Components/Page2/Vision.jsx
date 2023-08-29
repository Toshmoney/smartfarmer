import React from 'react'
import person1 from '../../Images/Rectangle 43.png'
import person2 from '../../Images/Rectangle 44.png'
import person3 from '../../Images/Rectangle 45.png'
import rect46 from '../../Images/Rectangle 46.png'
import rect47 from '../../Images/Rectangle 46 (1).png'

const Vision = () => {
  return (
    <div className='container px-[20px] lg:px-0 flex flex-col gap-10'>
        <div className='items-center mt-[8rem] w-full flex flex-col gap-4'>
            <h1 className='nunito capitalize text-2xl lg:text-4xl w-full lg:w-[37%]'>our vision to the farmer in africa.</h1>
            <p className='nunito text-[grey] text-[15px] lg:text-[18px] capitalize'>easy access to 5million worth of loan for your business</p>
        </div>
        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between py-[2rem] lg:py-[5rem]">
            <img src={person1} alt="" />
            <img src={person2} alt="" />
            <img src={person3} alt="" />
        </div>
        <div className='w-full flex flex-col lg:flex-row justify-between  items-center'>
            <img src={rect46} alt="" />
            <div className='w-full lg:w-[40%] text-center lg:text-left'>
                <h1 className='nunito text-2xl  lg:text-4xl w-full lg:w-[80%] capitalize '>help farmers get access to the right funds</h1>
                <p className='nunito text-[grey] text-[15px] lg:text-[18px] capitalize'>easy access to 5million worth of loan for your business</p>
            </div>
        </div>
        <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
            <div className='w-full lg:w-[40%] lg:text-left text-center'>
                <h1 className='nunito text-2xl lg:text-4xl w-full lg:w-[80%] capitalize'>help farmers get access to the right funds</h1>
                <p className='nunito text-[grey] text-[15px] lg:text-[18px] capitalize'>easy access to 5million worth of loan for your business</p>
            </div>
            <img src={rect47} alt="" />
        </div>
    </div>
  )
}

export default Vision