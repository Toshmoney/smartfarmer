import React from "react";

const Getfundprops = (props) =>{
    return(
        <div className="text-left flex flex-col gap-2 box shadow-lg shadow-grey-500/50 px-4 py-4 rounded-3xl">
            <h3 className="lg:text-[20px] text-[15px]">{props.number}</h3>
            <h3 className="lg:text-[20px] text-[15px]">{props.title}</h3>
            <p className="lg:text-[20px] text-[19px] nunito">{props.word}</p>
        </div>
    )
}

export default Getfundprops;