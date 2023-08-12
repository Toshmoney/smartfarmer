import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiX} from 'react-icons/fi'

const SignupNav = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () =>{
        setToggle(!toggle)
    }
  return (
    <div>
        <div className="w-100 w-[100%] flex items-center py-9 justify-center">
        <div className="container flex text-left justify-between w-full items-center">
            <div className="w-[20%]">
                <h3>Logo</h3>
            </div>
            <div className="hidden lg:flex justify-between w-[60%]">
                <div className="flex justify-between gap-x-10">
                    <a className="font-bold hover:text-[#35CD8D] ease-in duration-300" href="/about">About Us</a>
                    <a className="font-bold hover:text-[#35CD8D] ease-in duration-300" href="/works">How It Works</a>
                    <a className="font-bold hover:text-[#35CD8D] ease-in duration-300" href="/support">Support</a>
                </div>
                <div className="flex gap-x-4">
                    <button><a className="btn text-white" href="/signing">Sign In</a></button>
                </div>
            </div>
            {/* ===========mobile-nave ====================== */}
        </div>
        <div onClick={handleClick} className="lg:hidden cursor-pointer ">
            {toggle? <FiX/>:<GiHamburgerMenu className="svg"/>}
        </div>

        <div className={toggle? "toggle-sub":"toggle"}>
            <a className="font-bold hover:text-[#fff] ease-in duration-300" href="/about">About Us</a>
            <a className="font-bold hover:text-[#fff] ease-in duration-300" href="/works">How It Works</a>
            <a className="font-bold hover:text-[#fff] ease-in duration-300" href="/support">Support</a>
            <a className="font-bold hover:text-[#fff] ease-in duration-300" href="/signin">Sign In</a>
        </div>
    </div>
    </div>
  )
}

export default SignupNav;