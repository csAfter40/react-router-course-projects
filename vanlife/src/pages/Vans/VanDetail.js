import React from "react";
import { useParams, Link } from "react-router-dom";

export default function VanDetail() {
    const [van, setVan] = React.useState(null)
    const params = useParams();
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {setVan(data.vans)})
    }, [params.id])
    return (
        <div className="van-detail">
            {van ? <><Link className="back-to-vans" to={"/vans"}>
                <p>Back to all vans</p>
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
            </div></> :
            <h3>Loading...</h3>}
        </div>
    )
}