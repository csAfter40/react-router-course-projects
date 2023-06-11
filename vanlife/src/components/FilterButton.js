import React from "react";

export default function FilterButton({name, handleClick, isSelected}) {
    return (
        <div className={`filter-button ${isSelected && "selected"}`} onClick={handleClick}>
            <h3>{name}</h3>
        </div>
    )
}