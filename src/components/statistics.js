import React from "react";

const Statistics=(props)=>{
    return(
        <div className="Stats">
            {/* <p>Total points={props.total}</p> */}
            <p>Total points plotted={props.numplot}</p>
            <p>High confidence={props.highConfidence}</p>    
            <p>Low confidence={props.lowConfidence}</p>
            <p>Not geocoded={props.notgeocoded}</p>

        </div>
    )
}
export default Statistics