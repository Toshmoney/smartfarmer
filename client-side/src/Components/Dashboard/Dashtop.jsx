import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import alert from '../../Images/Group 18.png'
import question from '../../Images/Group 19.png'
import options from '../../Images/Frame 143.png'

const Dashtop = () => {
  return (
    <div className='w-full flex justify-between px-6 py-3 bg-white border-b-2'>
        <h5>Logo</h5>
        <div className='flex border-2 bg-[#b8b7b7] border-none w-[25%] gap-4 rounded-3xl px-3 py-[2px]'>
            <AiOutlineSearch/>
            <input className='outline-0 w-[80%] bg-transparent' type="text" placeholder='Search Here' />
        </div>
        <div className='flex gap-3'>
            <img src={question} alt="" />
            <img src={alert} alt="" />
            <img src={options} alt="" />
        </div>
    </div>
  )
}

export default Dashtop