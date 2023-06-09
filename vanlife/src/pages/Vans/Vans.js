import React  from "react";
import FilterButton from "../../components/FilterButton"
import VanCard from "../../components/VanCard";
import { Link } from "react-router-dom";

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(()=>{
        fetch("/api/vans").then((response)=>response.json()).then((data)=>setVans(data.vans))
    }, [])

    console.log(vans)

    return (
        <div className="vans">
            <h2>Explore our van options</h2>
            <div className="filter-button-container">
                <FilterButton name="Simple"/>
                <FilterButton name="Luxury"/>
                <FilterButton name="Rugged"/>
                <p>Clear filters</p>
            </div>
            <div className="cards-container">
                {vans.map((van, i)=>{
                    return (
                        <Link key={i} className="vans-detail-link" to={`/vans/${van.id}`}>
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