import React from "react";
import { Outlet, Link, NavLink, useParams } from "react-router-dom";
import VanTypeBadge from "./VanTypeBadge";

export default function HostVanDetailLayout() {
    const params = useParams()
    const [hostVan, setHostVan] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    React.useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                data.vans.length && setHostVan(data.vans[0]);
                setLoading(false)
            });
    },[params.id])
    return (
        <div className="host-van-detail-layout-container">
            {loading ? <h1>Loading...</h1> :
            hostVan ? <div className="host-van-detail-layout">
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
            </div>: 
            <h2>Van not found!</h2>
            }
        </div>
    )
}