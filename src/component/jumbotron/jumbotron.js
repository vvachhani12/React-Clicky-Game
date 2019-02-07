import React from 'react';
import './jumbotron.css';

function jumbotron(props){

    return(
        <div className="jumbotron jumbotron-fluid">
            {props.children}
        </div>
    );
}

export default jumbotron;