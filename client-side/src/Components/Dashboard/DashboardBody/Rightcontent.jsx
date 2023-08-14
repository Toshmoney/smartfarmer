import React from 'react'
import chart from '../../../Images/Chart 7.png'
import del from '../../../Images/Vector (11).png'


const Rightcontent = () => {
  return (
    <div className=' w-full py-10 px-10 flex flex-col gap-6 text-left h-[92vh] overflow-x-scroll'>
      <h4 className='nunito'>Dashboard</h4>
      <div className='w-[100%] flex flex-row justify-between'>
        <div className='py-7 px-8 bg-white rounded-2xl text-center nunito'>
          <p>Estimated Loan</p>
          <h1>NGN 500,000</h1>
        </div>
        <div className='py-7 px-8 bg-white rounded-2xl text-center nunito'>
          <p>Estimated Loan</p>
          <h1>NGN 500,000</h1>
        </div>
        <div className='py-7 px-8 bg-white rounded-2xl text-center nunito'>
          <p>Estimated Loan</p>
          <h1>NGN 500,000</h1>
        </div>
      </div>

      {/* =============== Chart Area ====================== */}
        <img src={chart} alt="" />

      <div className='py-10 px-10 bg-white rounded-3xl'>
        <h2 className='capitalize nunito'>payment history</h2>
        <table className='w-full flex flex-col gap-3'>
          <div className='flex flex-row'>
            <h3 className='name'>Recipent Name</h3>
            <h3 className='others'>Bank Name</h3>
            <h3 className='others'>Amount</h3>
            <h3 className='others'>Date</h3>
            <h3 className='others'>Action</h3>
          </div>
          <tr className='flex flex-row items-center'>
            <td className='name flex gap-4'>
              <li className='list-none font-bold border-2 py-1 px-3 rounded-lg'>1</li>
              <h4>Ibrahim Abdulsalam</h4>
            </td>
            <td className='others font-bold'>WEMA Bank</td>
            <td className='others font-bold'>NGN 200, 000</td>
            <td className='others font-bold'>26, March 2023</td>
            <td className='others font-bold'><img src={del} alt="" /></td>
          </tr>
          <tr className='flex flex-row items-center'>
            <td className='name flex gap-4'>
              <li className='list-none font-bold border-2 py-1 px-3 rounded-lg'>2</li>
              <h4>Ibrahim Abdulsalam</h4>
            </td>
            <td className='others font-bold'>OPAY Bank</td>
            <td className='others font-bold'>NGN 200, 000</td>
            <td className='others font-bold'>26, March 2023</td>
            <td className='others font-bold'><img src={del} alt="" /></td>
          </tr>
          <tr className='flex flex-row items-center'>
            <td className='name flex gap-4'>
              <li className='list-none font-bold border-2 py-1 px-3 rounded-lg'>2</li>
              <h4>Ibrahim Abdulsalam</h4>
            </td>
            <td className='others font-bold'>WEMA Bank</td>
            <td className='others font-bold'>NGN 200, 000</td>
            <td className='others font-bold'>26, March 2023</td>
            <td className='others font-bold'><img src={del} alt="" /></td>
          </tr>
          <tr className='flex flex-row items-center'>
            <td className='name flex gap-4'>
              <li className='list-none font-bold border-2 py-1 px-3 rounded-lg'>2</li>
              <h4>Ibrahim Abdulsalam</h4>
            </td>
            <td className='others font-bold'>OPAY Bank</td>
            <td className='others font-bold'>NGN 200, 000</td>
            <td className='others font-bold'>26, March 2023</td>
            <td className='others font-bold'><img src={del} alt="" /></td>
          </tr>
          <tr className='flex flex-row items-center'>
            <td className='name flex gap-4'>
              <li className='list-none font-bold border-2 py-1 px-3 rounded-lg'>2</li>
              <h4>Ibrahim Abdulsalam</h4>
            </td>
            <td className='others font-bold'>PALMPAY Bank</td>
            <td className='others font-bold'>NGN 200, 000</td>
            <td className='others font-bold'>26, March 2023</td>
            <td className='others font-bold'><img src={del} alt="" /></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Rightcontent