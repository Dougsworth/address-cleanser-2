import React from "react";

const Statistics=(props)=>{
    return(
        <div className="Stats">
            <p>Total points={props.total}</p>
            <p>Not plotted=  {props.notgeocoded}</p>
            <p>Total points plotted={props.numplot}</p>
            <p>Low confidence= {props.lowConfidence}</p>
            <p>Total points plotted= {props.highConfidence}</p>       
        </div>
    )
}
export default Statistics