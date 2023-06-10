import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const {hostVan} = useOutletContext();
    return (
        <div className="host-van-photos">
            <img src={hostVan.imageUrl} alt="" />
        </div>
    )
}