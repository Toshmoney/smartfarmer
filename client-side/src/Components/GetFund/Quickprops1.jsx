import React from "react";

const Quickprops1 = (props) =>{
    return(
        <div className="mt-10 px-5 flex flex-col gap-6 items-center lg:flex lg:flex-row lg:gap-[19rem]">
            <img className="w-full lg:w-[45%]" src={props.image} alt=""/>
            <div className='w-full text-center lg:w-1/2 flex flex-col gap-4 lg:text-left'>
                <h1 className="head lg:w-[80%]">{props.heading}</h1>
                <p className="w-full lg:w-[75%] capitalize">{props.paragraph}</p>
                <div>
                    <button className="btn text-white">{props.button}</button>
                </div>
            </div>
        </div>
    )
}
export default Quickprops1