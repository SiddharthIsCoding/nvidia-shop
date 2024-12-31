import React from "react";
import "./specials.css";
import Specialbox from "./specialbox";

function Specials(props)
{
    return(
        <div id="specials" >
            <h1>{props.headline}</h1>

            <a href="#" ><Specialbox name="Nvidia Processors" url="https://miro.medium.com/v2/resize:fit:1021/1*VxDxBKbXWJCIuDRAUk_PYA.png"  ></Specialbox></a>

            <a href="#" ><Specialbox name="Nvidia Processors" url="https://miro.medium.com/v2/resize:fit:1021/1*VxDxBKbXWJCIuDRAUk_PYA.png"  ></Specialbox></a>

            <a href="#" ><Specialbox name="Nvidia Processors" url="https://miro.medium.com/v2/resize:fit:1021/1*VxDxBKbXWJCIuDRAUk_PYA.png"  ></Specialbox></a>

            <a href="#" ><Specialbox name="Nvidia Processors" url="https://miro.medium.com/v2/resize:fit:1021/1*VxDxBKbXWJCIuDRAUk_PYA.png"  ></Specialbox></a>


        </div>
    )
}
export default Specials;