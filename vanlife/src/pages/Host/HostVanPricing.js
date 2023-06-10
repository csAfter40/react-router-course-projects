import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const {hostVan} = useOutletContext();
    return (
        <div className="host-van-pricing">
            <h2>{`$${hostVan.price}`}<span>/day</span></h2>           
        </div>
    )
}