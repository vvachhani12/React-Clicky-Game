import React from "react";
import "./nav.css";

function nav(props){

    return(

        <div className="navbar justify-content-center">
            {props.children}
        </div>
    )
}

export default nav;