import React  from "react";
import FilterButton from "../../components/FilterButton"
import VanCard from "../../components/VanCard";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const typeFilter = searchParams.get("type");
    React.useEffect(()=>{
        async function loadVans(){
            try {
                const vansData = await getVans("/api/vans");
                console.log(vansData)
                setVans(vansData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadVans();
    }, [])
    console.log(error)
    const filteredVansArray = typeFilter 
        ? vans.filter(van=>van.type===typeFilter)
        : vans;
    
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
                {loading 
                    ? <h2>Loading...</h2> 
                    : error 
                        ? <h2>{error.message}</h2> 
                        : filteredVansArray.map((van, i)=>{
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
        </div>
    )
}