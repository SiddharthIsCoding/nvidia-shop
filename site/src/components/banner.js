import React from "react";
import "./banner.css";


function Banner(props){
    return(
        <div id="banner" >
            <h1>{props.headline}</h1>
        </div>
    )
}

export default Banner;