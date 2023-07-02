import React from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import HostVansCard from "../../components/HostVansCard";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
import ErrorElement from "../../components/ErrorElement";

export async function loader({request}) {
    return await requireAuth(request) || defer({vans: getHostVans()});
}

export default function HostVans() {
    const dataPromise = useLoaderData()
    return (
        <React.Suspense fallback={<h2>Loading vans...</h2>}> 
            <Await 
                resolve={dataPromise.vans}
                errorElement={<ErrorElement/>}
            >
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
