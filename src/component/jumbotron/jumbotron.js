import React from 'react';
import './jumbotron.css';

function jumbotron(props){

    return(
        <div className="jumbotron">
            {props.children}
        </div>
    );
}

export default jumbotron;