import React from "react";
import './nav.css';
import {Link} from "react-router-dom";


function Navbar(){
    return (
        <nav>
            <ul>
                <a href="#" ><li><Link to={"/adminlogin"} style={{color:"white",textDecoration:"none"}} >Admin</Link></li></a>
                <a href="#" ><li>Cart</li></a>
                <a href="#" ><li>Search</li></a>
            </ul>
        </nav>
    )
}
export default Navbar;