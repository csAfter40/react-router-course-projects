import React  from "react";
import FilterButton from "../../components/FilterButton"
import VanCard from "../../components/VanCard";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    const typeFilter = searchParams.get("type");
    console.log(typeFilter);
    React.useEffect(()=>{
        fetch("/api/vans").then((response)=>response.json()).then((data)=>setVans(data.vans))
    }, [])

    
    function handleTypeSelect(type) {
        setSearchParams({type:type})
    }

    function clearFilters(){
        setSearchParams({});
    }

    const filteredVansArray = typeFilter 
        ? vans.filter(van=>van.type===typeFilter)
        : vans;
    
    return (
        <div className="vans">
            <h2>Explore our van options</h2>
            <div className="filter-button-container">
                <FilterButton 
                    isSelected={typeFilter==="simple"} 
                    handleClick={()=>{handleTypeSelect("simple")}} 
                    name="Simple"
                />
                <FilterButton 
                    isSelected={typeFilter==="luxury"} 
                    handleClick={()=>{handleTypeSelect("luxury")}} 
                    name="Luxury"
                />
                <FilterButton 
                    isSelected={typeFilter==="rugged"} 
                    handleClick={()=>{handleTypeSelect("rugged")}} 
                    name="Rugged"
                />
                <p onClick={clearFilters}>Clear filters</p>
            </div>
            <div className="cards-container">
                {filteredVansArray.map((van, i)=>{
                    return (
                        <Link key={i} className="vans-detail-link" to={van.id}>
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