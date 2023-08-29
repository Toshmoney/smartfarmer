import React from 'react'
import empower from '../../Images/Rectangle 42.png'

const Empower = () => {
  return (
    <div className='container text-left'>
        <div className='flex flex-col gap-10 items-center lg:flex-row lg:justify-between w-full lg:items-center'>
            <div className='flex items-center text-center lg:text-left flex-col w-full lg:items-start lg:w-1/2 gap-[15px]'>
                <h1 className='nunito text-2xl lg:text-5xl capitalize lg:w-[85%] lg:leading-[3.5rem] font-bold'>empower farmers by investing in the agriculture</h1>
                <p className='nunito text-[grey] capitalize text-1xl lg:text-left lg:text-2xl w-full lg:w-[60%]'>easy access to 5million worth of loan for your business</p>
            </div>
            <img className='w-[400px] h-[400px] lg:w-[494px] lg:h-[494px]' src={empower} alt="" />
        </div>
    </div>
  )
}

export default Empower