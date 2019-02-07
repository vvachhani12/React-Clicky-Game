import React from 'react';
import './page.css';

function wrapper(props){

    return(

        <div className="wrapper">
            {props.children}
        </div>
    )
}

export default wrapper;