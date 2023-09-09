import React from "react";
import hero from '../../Images/HeroImg (1).png'


const Hero = () =>{
    return(
        <div className="lg:px-0 px-4">
            <div className=' container  flex flex-col md:flex-col w-full lg:flex lg:w-full lg:flex-row items-center relative'>
                <div className='w-full flex-col items-center lg:w-1/2 lg:text-left text-center space-y-5'>
                    <h1 className='nunito w-[100%] text-[25px] md:text-[30px] lg:w-[55%]  md:w-[100%] lg:text-4xl '>Supporting Africa Farmer to Fund their Agric Business</h1>
                    <p className="nunito text-[gray]">Easy Access to 5million worth of Loan for Your Business</p>
                    <div>
                        <button className='btn text-white'>Get Started</button>
                    </div>
                </div>
                <img className='w-1/2 md:[75%] lg:w-1/2' src={hero} alt="" />
                <div className='absolute w-[50%] h-[70vh] bg-[#9fddc3] right-20 blur-3xl -z-20 rounded-full opacity-30'></div>
            </div>
            <div className="grid grid-cols-2 text-center bg-[#EBFBF3] py-12 mt-[2rem] md:mt-[2rem] lg:mt-[4rem] mb-[3rem] lg:grid-cols-4 gap-4">
                <div>
                    <p className="nunito lg:text-[20px] font-bold text-[grey] text-[15px]">Access to Over</p>
                    <h1 className="nunito lg:text-[40px] text-[25px]">N50N+</h1>
                </div>
                <div>
                    <p className="nunito lg:text-[20px] font-bold text-[grey] text-[15px]">Trusted Partner</p>
                    <h1 className="nunito lg:text-[40px] text-[25px]">10k+</h1>
                </div>
                <div>
                    <p className="nunito lg:text-[20px] font-bold text-[grey] text-[15px]">Workers</p>
                    <h1 className="nunito lg:text-[40px] text-[25px]">500+</h1>
                </div>
                <div>
                    <p className="nunito lg:text-[20px] font-bold text-[grey] text-[15px]">Investor</p>
                    <h1 className="nunito lg:text-[40px] text-[25px]">100+</h1>
                </div>
            </div>
        </div>
    )
}
export default Hero;