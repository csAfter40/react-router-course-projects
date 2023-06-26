import React from "react";
import { useLoaderData } from "react-router-dom";
import HostVansCard from "../../components/HostVansCard";
import { getVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader() {
    return await requireAuth() || getVans("/api/host/vans");
}

export default function HostVans() {
    const hostVans = useLoaderData()
    return (
        <div className="host-vans">
            <div className="host-vans-container">
                {hostVans.map((van) => {
                    return (
                        <HostVansCard
                            key={van.id}
                            van={van}
                        />
                    )
                })}
            </div>
        </div>
    )
}
