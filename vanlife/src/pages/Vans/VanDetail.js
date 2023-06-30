import React from "react";
import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom";
import { getVans } from "../../api";

export function loader({params}){ //automatically gets the params as a parameter
    return defer({van: getVans(`/api/vans/${params.id}`)});
}

export default function VanDetail() {
    const location = useLocation()
    const dataPromise = useLoaderData()
    const searchParams = location.state?.search || null;
    return (
        <div className="van-detail">
            {
                <>
                    <Link 
                        className="back-to-vans" 
                        to={`..?${searchParams? searchParams.toString() : ""}`} 
                        relative="path"
                    >
                        <p><span className="left-arrow">&larr;</span> {`Back to ${searchParams ? searchParams.get("type") || "all" : "all"} vans`}</p>
                    </Link>
                    <React.Suspense fallback={<h3>Loading van...</h3>}>
                        <Await resolve={dataPromise.van}>
                            {(van)=>{
                                return (
                                    <>
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
                                )
                            }}
                        </Await>
                    </React.Suspense>
                    
                    
                </>
            }
        </div>
    )
}