import React from "react";
import {Link} from "react-router-dom";

export default function HostVansCard({van}) {
    return (
        <Link to={van.id} className="host-vans-card">
            <img src={van.imageUrl} alt="" />
            <div className="host-vans-card-text-container">
                <h3>{van.name}</h3>
                <p>{`$${van.price}/day`}</p>
            </div>
        </Link>
    )
}