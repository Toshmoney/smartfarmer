import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiX} from 'react-icons/fi'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () =>{
        setToggle(!toggle)
    }
  return (
    <div className="w-100 flex items-center py-9 justify-center">
            <div className="flex justify-between w-[70%] items-center">
                <div className="w-[20%]">
                    <h3>Logo</h3>
                </div>
                <div className="hidden lg:flex justify-between w-[70%]">
                    <div className="flex justify-between gap-x-10">
                        <a className="font-bold hover:text-[#35CD8D] ease-in duration-300" href="">About Us</a>
                        <a className="font-bold hover:text-[#35CD8D] ease-in duration-300" href="">How It Works</a>
                        <a className="font-bold hover:text-[#35CD8D] ease-in duration-300" href="">Support</a>
                    </div>
                    <div className="flex gap-x-4">
                        <button><a className="font-bold text-[#35CD8D] rounded-2xl py-3 px-8 border-2 border-[#35CD8D]" href="">Sign In</a></button>
                        <button><a className="btn text-white" href="">Sign Up</a></button>
                    </div>
                </div>
                {/* ===========mobile-nave ====================== */}
            </div>
            <div onClick={handleClick} className="lg:hidden cursor-pointer ">
                {toggle? <FiX/>:<GiHamburgerMenu className="svg"/>}
            </div>

            <div className={toggle? "toggle-sub":"toggle"}>
                <a className="font-bold hover:text-[#fff] ease-in duration-300" href="">About Us</a>
                <a className="font-bold hover:text-[#fff] ease-in duration-300" href="">How It Works</a>
                <a className="font-bold hover:text-[#fff] ease-in duration-300" href="">Support</a>
                <a className="font-bold hover:text-[#fff] ease-in duration-300" href="">Sign In</a>
                <a className="font-bold hover:text-[#fff] ease-in duration-300" href="">Sign Up</a>
            </div>
        </div>
  )
}

export default Header