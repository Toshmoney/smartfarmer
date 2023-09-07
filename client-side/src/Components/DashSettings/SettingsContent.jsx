import React, { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { CiLock } from 'react-icons/ci'
import { FaRegBell } from 'react-icons/fa'
import Profilepage from './Profilepage'
import Securitypage from './Securitypage'
import Notificationpage from './Notificationpage'


const tabs = [
    {
        id: 'Profile',
        label: "Profile",
        icon: <BiUser />,
        para: 'Full Name, Email, Address, Location',
        component: <Profilepage/>
    },
    {
        id: 'Security',
        label: "Security",
        icon: <CiLock />,
        para: 'Password, 2FA Authentification',
        component: <Securitypage/>
    },
    {
        id: 'Notification',
        label: "Notification",
        icon: <FaRegBell />,
        para: 'Full Name, Email, Address, Location',
        component: <Notificationpage/>
    }
]

const SettingsContent = () => {
    const [active, setActive] = useState("Profile")
    return (
        <div className='flex lg:flex-row flex-col lg:px-10 py-4  gap-4 w-full p-4'>
            <div className='lg:w-[15%] w-[100%] flex lg:flex-col flex-row lg:h-[40vh] rounded-3xl flex; bg-white overflow-hidden'>
                {
                    tabs.map((tab) => {
                        return (
                            <button onClick={()=> setActive(tab.id)} key={tab.id} className={`flex  cursor-pointer w-full py-8 px-4 ${active === tab.id? "bg-[#EBFBF3] border-b-[green] border-2":"bg-white text-[grey]"}`}>
                                {tab.icon}
                                <div className='flex flex-col items gap-1'>
                                    <h5 className='nunito'>{tab.label}</h5>
                                    <b className='text text-[8px] text-[grey]'>{tab.para}</b>
                                </div>
                            </button>
                        )
                    })
                }
            </div>
            <div className='w-full h-[95%]'>
                {tabs.find((tab)=>tab.id=== active)?.component}
            </div>
            
        </div>
    )
}

export default SettingsContent