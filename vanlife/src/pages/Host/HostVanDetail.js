import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDetail() {
    const {hostVan} = useOutletContext();
    return (
        <div className="host-van-detail">
            <p><span>Name: </span>{hostVan.name}</p>
            <p><span>Category: </span>{hostVan.type.charAt(0).toUpperCase()+hostVan.type.slice(1)}</p>
            <p><span>Description: </span>{hostVan.description}</p>
            <p><span>Visibility: </span>Public</p>
        </div>
    )
}