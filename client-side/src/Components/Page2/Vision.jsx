import React from 'react'
import person1 from '../../Images/Rectangle 43.png'
import person2 from '../../Images/Rectangle 44.png'
import person3 from '../../Images/Rectangle 45.png'

const Vision = () => {
  return (
    <div className='container'>
        <div className='items-center mt-[8rem] w-full flex flex-col gap-4'>
            <h1 className='nunito capitalize text-4xl w-[37%]'>our vision to the farmer in africa.</h1>
            <p className='nunito text-[grey] lg:text-[18px] capitalize'>easy access to 5million worth of loan for your business</p>
        </div>
        <div className="flex flex-row justify-between mt-[6rem]">
            <img src={person1} alt="" />
            <img src={person2} alt="" />
            <img src={person3} alt="" />
        </div>
    </div>
  )
}

export default Vision