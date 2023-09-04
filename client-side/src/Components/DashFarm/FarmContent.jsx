import React from 'react'
import plus from '../../Images/plus.svg'
import search from '../../Images/sss.svg'
import { farmData } from './FarmData'

const FarmContent = () => {
  return (
    <div className=' w-full py-5 px-3 lg:px-10 flex flex-col gap-6 text-left h-[92vh] overflow-x-scroll'>
        <div className='bg-white rounded-xl p-6 items-center flex flex-col'>
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
            <table className='mt-6 w-full'>
                <tr className='flex justify-between w-full bg-[#FBFBFB] px-3 py-4'>
                    <th className='w-[50%]'>Farm Name</th>
                    <th className='w-[50%]'>Email Address</th>
                    <th className='w-[50%]'>Phone Number</th>
                    <th className='w-[20%]'>Farm Size</th>
                    <th className='w-[20%]'>Date Founded</th>
                    <th className='w-[10%]'>Action</th>
                </tr>
                {
                    farmData.map(d=>{
                        return(
                            <tr className='flex w-full justify-between pl-2'> 
                                <td className='w-[50%]'>
                                    <div className='flex gap-1'>
                                        <p>{d.No}</p>
                                        <b>{d.name}</b>
                                    </div>
                                </td>
                                <td className='w-[50%]'>
                                    <b>{d.email}</b>
                                </td>
                                <td className='w-[50%]'>
                                    <b>{d.phone}</b>
                                </td>
                                <td className='w-[20%]'>
                                    {d.farmSize}
                                </td>
                                <td className='w-[20%]'>
                                    {d.DateFounded}
                                </td>
                                <td className='w-[10%]'>
                                    {d.action}
                                </td>
                            </tr>
                        )
                    })
                }
                
            </table>
        </div>
    </div>
  )
}

export default FarmContent