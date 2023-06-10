import React from "react";
import HostVansCard from "../../components/HostVansCard";

export default function HostVans() {
    const [hostVans, setHostVans] = React.useState(null)
    React.useEffect(()=>{
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
    },[])
    return (
        <div className="host-vans">
            {hostVans ? <div className="host-vans-container">
                {hostVans.map((van) => {
                    return (
                        <HostVansCard
                            key={van.id}
                            van={van}
                        />
                    )
                })}
            </div> :
            <h1>Loading...</h1>}
        </div>
    )
}
