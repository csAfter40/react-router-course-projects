import React from "react";
import VanTypeBadge from "./VanTypeBadge";

export default function VanCard({imageUrl, name, price, type}) {
    return (
        <div className="van-card">
            <img src={imageUrl} alt="" className="van-card-image"/>
            <div className="name-price-container">
                <h2 className="van-name">{name}</h2>
                <div className="van-price">
                    <h3>{`$${price}`}</h3>
                    <p>/day</p>
                </div>
            </div>
            <VanTypeBadge type={type}/>
        </div>
    )
}