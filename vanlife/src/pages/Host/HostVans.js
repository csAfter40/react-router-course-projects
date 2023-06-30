import React from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import HostVansCard from "../../components/HostVansCard";
import { getVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({request}) {
    return await requireAuth(request) || defer({vans: getVans("/api/host/vans")});
}

export default function HostVans() {
    const dataPromise = useLoaderData()
    return (
        <React.Suspense fallback={<h2>Loading vans...</h2>}> 
            <Await resolve={dataPromise.vans}>
                {(hostVans) => {
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
                }}
            </Await>
        </React.Suspense>
        
    )
}
