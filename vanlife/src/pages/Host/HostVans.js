import React from "react";
import HostVansCard from "../../components/HostVansCard";
import { getVans } from "../../api";

export default function HostVans() {
    const [hostVans, setHostVans] = React.useState(null)
    const [loading, setLoading] = React.useState(true);
    React.useEffect(()=>{
        async function loadVans(){
            const data = await getVans("/api/host/vans");
            console.log(data);
            setHostVans(data);
            setLoading(false);
        }
        loadVans();
    },[])
    return (
        <div className="host-vans">
            {loading ? <h1>Loading...</h1> : <div className="host-vans-container">
                {hostVans.map((van) => {
                    return (
                        <HostVansCard
                            key={van.id}
                            van={van}
                        />
                    )
                })}
            </div>}
        </div>
    )
}
