import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
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
                        <button><a className="font-bold text-[#35CD8D] rounded-2xl py-3 px-4 border-2 border-[#35CD8D]" href="">Sign In</a></button>
                        <button><a className="btn" href="">Sign Up</a></button>
                    </div>
                </div>
                {/* ===========mobile-nave ====================== */}
            </div>
            <div className="lg:hidden">
                <GiHamburgerMenu className="svg"/>
            </div>

            <div className="w-full h-100vh bg-[#35CD8D] py-20 flex-col items-center justify-center absolute lg:hidden">
                <div className="flex flex-col items-center">
                    <a className="font-bold hover:text-[#35CD8D] ease-in duration-300" href="">About Us</a>
                    <a className="font-bold hover:text-[#35CD8D] ease-in duration-300" href="">How It Works</a>
                    <a className="font-bold hover:text-[#35CD8D] ease-in duration-300" href="">Support</a>
                    <a className="font-bold hover:text-[#35CD8D] ease-in duration-300" href="">Sign In</a>
                    <a className="font-bold hover:text-[#35CD8D] ease-in duration-300" href="">Sign Up</a>
                </div>
            </div>
        </div>
  )
}

export default Header