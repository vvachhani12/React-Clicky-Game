import React from 'react';
import "./score.css";

function score({score, topscore}){

    return(
        <div id="score">
            <b> Score = {score} || Top Score = {topscore} </b>
        </div>
    )
}

export default score;