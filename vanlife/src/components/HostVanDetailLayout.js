import React from "react";
import { Outlet, Link, NavLink, useLoaderData } from "react-router-dom";
import VanTypeBadge from "./VanTypeBadge";
import { getVans } from "../api";

export function loader({params}){
    return getVans(`/api/host/vans/${params.id}`);
}

export default function HostVanDetailLayout() {
    const hostVan = useLoaderData()[0]
    return (
        <div className="host-van-detail-layout-container">
            <div className="host-van-detail-layout">
                <Link to={".."} className="back-to-host-vans-link">
                    Back to all vans
                </Link>
                <div className="host-van-detail-container">
                    <div className="host-van-detail-card">
                        <img src={hostVan.imageUrl} alt="" />
                        <div className="host-van-detail-card-text-container">
                            <VanTypeBadge type={hostVan.type}/>
                            <h2>{hostVan.name}</h2>
                            <h3>{`$${hostVan.price}/day`}</h3>
                        </div>
                    </div>
                    <nav className="host-vans-nav">
                        <NavLink to="." end>Details</NavLink> {/* link to current directory*/}
                        <NavLink to="pricing">Pricing</NavLink>
                        <NavLink to="photos">Photos</NavLink>
                    </nav>
                    <Outlet
                        context={{hostVan}}
                    />
                </div>
            </div>
        </div>
    )
}