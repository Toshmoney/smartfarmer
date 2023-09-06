import React, { useEffect, useState } from 'react'
import plus from '../../Images/plus.svg'
import search from '../../Images/sss.svg'
import { farmData } from './FarmData'
import {Table,Input} from 'antd' 

const FarmContent = () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const columns =[
        {
            title:'No',
            dataIndex:'No'
        }, 
        {
            title:'Farm Name',
            dataIndex:'farmName'
        }, 
        {
            title:'Email',
            dataIndex:'email',
            sorter:(record1, record2)=>{
                return(record1.email > record2.email)
            }
        }, 
        {
            title:'Phone Number',
            dataIndex:'phone'
        }, 
        {
            title:'Farm Size',
            dataIndex:'farmSize',
            sorter:(farm1,farm2)=>{
                return(farm1.farmSize > farm2.farmSize)
            },
        }, 
        {
            title:'Date Founded',
            dataIndex:'DateFounded'
        }, 
        {
            title:'Action',
            dataIndex:'action'
        },
    ]
  return (
    <div className=' w-full py-5 px-3 lg:px-10 flex flex-col gap-6 text-left h-[92vh] overflow-y-auto'>
        <div className='bg-white overflow-x-auto rounded-xl p-6 items-center flex flex-col'>
            <div className='flex w-full lg:flex-row flex-col lg:gap-0 gap-3 items-center justify-between'>
                <div>
                    <h4 className='nunito'>Farm Details</h4>
                    <p className='capitalize nunito'>let us know more about your farm</p>
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
                            {/* <Input.Search style={{outline:"none", border:non}} className='outline-none border-none w-full' type="search" /> */}
                            <input type="text" className="search" />
                        </div>
                    </div>
                </div>
                <a className='flex items-center justify-center gap-1 w-full lg:w-[15%] rounded-lg p-3 bg-[#35CD8D]'>
                    <img src={plus} alt="" />
                    <h5 className='text-white nunito'>Add Farm Details</h5>
                </a>
            </div>
            <div className='app flex w-full lg:overflow-y-auto overflow-x-auto bg-green-50'>
                <header className='App-header w-full'>
                    <Table className='w-[100%]'
                    columns={columns}
                    dataSource={farmData}
                    pagination={
                        {
                            pageSize:pageSize,
                            current:page,
                            total:40,
                            onChange:(page, pageSize)=>{
                                setPage(page);
                                setPageSize(pageSize)
                            }
                        }
                    }
                    >
                    
                        
                    </Table>
                </header>
            </div>
        </div>
    </div>
  )
}

export default FarmContent