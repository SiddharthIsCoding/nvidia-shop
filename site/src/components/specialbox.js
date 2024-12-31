import React from "react";
import "./specials.css";

function Specialbox(props)
{
    return(
        <div id="specialbox" >
            <img src={props.url} ></img>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Specialbox;