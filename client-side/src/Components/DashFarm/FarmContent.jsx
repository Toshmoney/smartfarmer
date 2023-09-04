import React from 'react'
import plus from '../../Images/plus.svg'
import search from '../../Images/sss.svg'

const FarmContent = () => {
  return (
    <div className=' w-full py-5 px-3 lg:px-10 flex flex-col gap-6 text-left h-[92vh] overflow-x-scroll'>
        <div className='bg-white rounded-xl p-6 items-center'>
            <div className='flex w-full items-center justify-between'>
                <div>
                    <h4 className='nunito'>Farm Details</h4>
                    <p className='capitalize nunito'>let us know more about your farm</p>
                </div>
                <div className='w-[40%]'>
                    <div className='flex gap-2'>
                        <select className='border-[1px] border-black p-2 rounded-xl w-[50%]' name="" id="">
                            <option value="">Filter by</option>
                            <option value="">One</option>
                            <option value="">Two</option>
                            <option value="">Three</option>
                            <option value="">Four</option>
                        </select>
                        <div className='flex gap-1 border-[1px] border-black w-[45%] rounded-lg px-1'>
                            <img width={20} height={20} src={search} alt="" />
                            <input className='outline-none border-none w-full' type="search" />
                        </div>
                    </div>
                </div>
                <a className='flex items-center justify-center gap-1 w-[15%] rounded-lg p-3 bg-[#35CD8D]'>
                    <img src={plus} alt="" />
                    <h5 className='text-white nunito'>Add Farm Details</h5>
                </a>
            </div>
        </div>
        <div>
    
        </div>
    </div>
  )
}

export default FarmContent