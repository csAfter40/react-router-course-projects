import React  from "react";
import FilterButton from "../../components/FilterButton"
import VanCard from "../../components/VanCard";
import { Link, useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import { getVans } from "../../api";
import ErrorElement from "../../components/ErrorElement";

export function loader(){
    const vansPromise = getVans("/api/vans");
    return defer({vans: vansPromise});
    // return getVans("/api/vans");
}

export default function Vans() {
    const loaderData = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type");
    
    function editSearchParams(key, value) {
        setSearchParams((prevParams) => {
            const newParams = new URLSearchParams(prevParams.toString());
            value ? newParams.set(key, value) : newParams.delete(key);
            return newParams;
        })
    }
    return (
        <div className="vans">
            <h2>Explore our van options</h2>
            <React.Suspense fallback={ <h2>Loading Vans</h2> }>
                <Await 
                    resolve={loaderData.vans}
                    errorElement={<ErrorElement/>}
                >
                    
                    {(vans)=>{
                        const filteredVansArray = typeFilter 
                            ? vans.filter(van=>van.type===typeFilter)
                            : vans;
                        return (
                            <>
                                <div className="filter-button-container">
                                    <FilterButton 
                                        isSelected={typeFilter==="simple"} 
                                        handleClick={()=>editSearchParams("type", "simple")} 
                                        name="Simple"
                                    />
                                    <FilterButton 
                                        isSelected={typeFilter==="luxury"} 
                                        handleClick={()=>editSearchParams("type", "luxury")} 
                                        name="Luxury"
                                        />
                                    <FilterButton 
                                        isSelected={typeFilter==="rugged"} 
                                        handleClick={()=>editSearchParams("type", "rugged")} 
                                        name="Rugged"
                                        />
                                    {typeFilter && <p onClick={()=>editSearchParams("type", null)}>Clear filters</p>}
                                </div>  
                                <div className="cards-container">
                                    {filteredVansArray.map((van, i)=>{
                                        return (
                                            <Link 
                                            key={i} 
                                            className="vans-detail-link" 
                                                to={van.id}
                                                state={{search: searchParams}}
                                            >
                                                <VanCard
                                                    key={van.id}
                                                    name={van.name}
                                                    price={van.price}
                                                    imageUrl={van.imageUrl}
                                                    type={van.type}
                                                />
                                            </Link>
                                        )
                                    })}
                                </div>
                            </>
                        )
                    }}
                </Await>
            </React.Suspense>
        </div>
    )
}