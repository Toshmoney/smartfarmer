import React from 'react'
import empower from '../../Images/Rectangle 42.png'

const Empower = () => {
  return (
    <div className='container text-left'>
        <div className='flex justify-between w-full'>
            <div className='flex flex-col w-1/2'>
                <h1 className='nunito text-5xl'>empower farmers by investing in the agriculture</h1>
                <p>easy access to 5million worth of loan for your business</p>
            </div>
            <img src={empower} alt="" />
        </div>
    </div>
  )
}

export default Empower