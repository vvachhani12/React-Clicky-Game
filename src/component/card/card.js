import React from "react";
import "./card.css";

function cardComponent({id, img, name, clickfunction}){

    return(
        // <div className="container">
        //     <div className="row">
        //         <div className="col-sm-3">
                    // <div className="card hoverable">
                        // <div className="img-container">
                            <img
                                className="hoverable"
                                src={img}
                                id={id}
                                name={name}
                                alt="Game of Thrones Character"
                                onClick={clickfunction}
                            />
                    //     </div>
                    // </div>
                /* </div>
            </div>
        </div> */
        
    )
}

export default cardComponent;