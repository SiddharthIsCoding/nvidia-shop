import React from "react";
import "./category.css";
import Productbox from "./productbox";

function Category(props){
    return(
        <div id="category" >
            <h1>{props.Categoryname}</h1>
            <Productbox></Productbox>
            <Productbox></Productbox>
            <Productbox></Productbox>
            <Productbox></Productbox>

        </div>
    )
}

export default Category;