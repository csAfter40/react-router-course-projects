import React from "react";
import { Outlet, Link, NavLink, useLoaderData, defer, Await } from "react-router-dom";
import VanTypeBadge from "./VanTypeBadge";
import { getHostVan } from "../api";
import { requireAuth } from "../utils";
import ErrorElement from "./ErrorElement";

export async function loader({request, params}){
    return await requireAuth(request) || defer({van: getHostVan(params.id)});
}

export default function HostVanDetailLayout() {
    const dataPromise = useLoaderData()
    return (
        <div className="host-van-detail-layout-container">
            <div className="host-van-detail-layout">
                <Link to={".."} className="back-to-host-vans-link">
                    Back to all vans
                </Link>
                <React.Suspense fallback={<h3>Loading van...</h3>}>
                    <Await 
                        resolve={dataPromise.van}
                        errorElement={<ErrorElement/>}
                    >
                        {(van)=>{
                            const hostVan = van;
                            return (
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
                            )
                        }}
                    </Await>
                </React.Suspense>
                
            </div>
        </div>
    )
}