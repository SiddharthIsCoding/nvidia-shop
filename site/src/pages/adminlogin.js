import React from "react";
import './adminlogin.css';


function Adminlogin(){
    return(
        <div id="loginformbox" >
            <h1>Admin Login</h1><br></br>

            <input type="text" name="username" placeholder="Username" /><br></br>
            <input type="password" name="password" placeholder="Password" /><br></br>

            <button>Login</button>



        </div>
    )
}

export default Adminlogin;