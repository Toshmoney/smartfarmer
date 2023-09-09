import React from "react";
import icon from '../../Images/tabler-icon-circle-check-filled.png'


const Quickprops2 = (props) =>{
    return(
        <div className="mt-10 px-5 flex flex-col-reverse gap-6 items-center lg:flex lg:flex-row">
            <div className='w-full text-center lg:w-[60%] flex flex-col gap-4 lg:text-left'>
                <h1 className="lg:text-[30px] text-[20px]">{props.heading}</h1>
                <p className="w-full lg:w-[54%] capitalize">{props.paragraph}</p>
                <div className="nunito grid lg:grid-cols-2 w-[80%]">
                    <div className="flex items-center">
                        <img src={icon} alt="" />
                        <h5 className="capitalize">customizable repayment</h5>
                    </div>
                    <div className="flex items-center">
                        <img src={icon} alt="" />
                        <h5 className="capitalize">guidance on Agricultural</h5>
                    </div>
                    <div className="flex items-center">
                        <img src={icon} alt="" />
                        <h5 className="capitalize">installment-based repayments</h5>
                    </div>
                    <div className="flex items-center">
                        <img src={icon} alt="" />
                        <h5 className="capitalize">expert advice</h5>
                    </div>
                </div>
            </div>
            <img className="w-[50%] lg:w-[40%]" src={props.image} alt=""/>
        </div>
    )
}
export default Quickprops2