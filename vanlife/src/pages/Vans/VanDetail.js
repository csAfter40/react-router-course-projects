import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getVans } from "../../api";

export default function VanDetail() {
    const location = useLocation()
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const params = useParams();
    const searchParams = location.state?.search || null;
    React.useEffect(()=>{
        async function loadVan() {
            try {
                const vanData = await getVans(`/api/vans/${params.id}`);
                setVan(vanData);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadVan();
    }, [params.id])
    return (
        <div className="van-detail">
            {loading 
                ? <h3>Loading...</h3>
                : error
                    ? <h3>{error.message}</h3>
                    :<>
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
                    </>
            }
        </div>
    )
}