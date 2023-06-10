import React from "react";

export default function VanTypeBadge({type}) {
    return (
        <div className={`van-type ${type}`}>
            <p>{type}</p> 
        </div>
    )
}