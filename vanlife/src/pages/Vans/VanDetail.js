import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
    const location = useLocation()
    const [van, setVan] = React.useState(null)
    const params = useParams();
    const searchParams = location.state?.search || null;
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {setVan(data.vans)})
    }, [params.id])
    return (
        <div className="van-detail">
            {van 
                ? <>
                    <Link 
                        className="back-to-vans" 
                        to={`..?${searchParams? searchParams.toString() : ""}`} 
                        relative="path"
                    >
                        <p><span className="left-arrow">&larr;</span> {`Back to ${searchParams ? searchParams.get("type") || "all" : "all"} vans`}</p>
                    </Link>
                    <img src={van.imageUrl} alt="" />
                    <div className={`van-type ${van.type}`}>
                    <p>{van.type}</p> 
                    </div>
                    <h2 className="van-detail-name">{van.name}</h2>
                    <h3 className="van-detail-price">{`$${van.price}/day`}</h3>
                    <p>{van.description}</p>
                    <div className="rent-button">
                        <h3>Rent this van</h3>
                    </div>
                </> :
                    <h3>Loading...</h3>}
        </div>
    )
}