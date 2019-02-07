import React from "react";
import "./card.css";

function cardComponent({id, img, name, clickfunction}){

    return(
        <img
            className="hoverable"
            src={img}
            id={id}
            name={name}
            alt="Game of Thrones Character"
            onClick={clickfunction}
        />        
    )
}

export default cardComponent;