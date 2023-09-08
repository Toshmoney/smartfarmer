import React from 'react'
import {Table} from 'antd'

const RepaymentContent = () => {
    return (
        <div>
            <div className='bg-white overflow-x-auto rounded-xl p-6 items-center flex flex-col'>
                <div className='flex w-full lg:flex-row flex-col lg:gap-0 gap-3 items-center justify-between'>
                    <div>
                        <h4 className='nunito'>Loan Application</h4>
                        <p className='capitalize nunito'>Apply for Loan Application</p>
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <div className='flex gap-2'>
                            <select className='border-[1px] border-black p-2 rounded-xl lg:w-[50%] w-full' name="" id="">
                                <option value="">Filter by</option>
                                <option value="">One</option>
                                <option value="">Two</option>
                                <option value="">Three</option>
                                <option value="">Four</option>
                            </select>
                            <div className='flex gap-1 border-[1px] border-black lg:w-[45%] w-full rounded-lg px-1'>
                                <img width={20} height={20} src={search} alt="" />
                                <input type="text" className="search" placeholder='Search...' />
                            </div>
                        </div>
                    </div>
                    <a className='flex items-center justify-center gap-1 w-full lg:w-[15%] rounded-lg p-3 bg-[#35CD8D]'>
                        <img src={plus} alt="" />
                        <h5 className='text-white nunito'>Request Loan</h5>
                    </a>
                </div>
                <div className='app flex w-full lg:overflow-y-auto overflow-x-auto bg-green-50'>
                    <header className='App-header w-full'>
                        <Table
                            columns={columns}
                            dataSource={LoandData}
                        >

                        </Table>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default RepaymentContent