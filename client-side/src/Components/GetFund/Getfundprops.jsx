import React from "react";

const Getfundprops = (props) =>{
    return(
        <div className="text-left flex flex-col gap-2 box shadow-lg shadow-grey-500/50 px-4 py-4 rounded-3xl">
            <h3>{props.number}</h3>
            <h3>{props.title}</h3>
            <p className="word">{props.word}</p>
        </div>
    )
}

export default Getfundprops;