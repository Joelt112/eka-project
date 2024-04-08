

import React from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/rules.css"
import fsr from "../img/fs rules.png"

const Fsrules = ()=>{
    return(
        <div className="fsdiv">
            <img className ="fsr"src={fsr} alt="" />
            <div className='buttoncont'>
            <a className = "register"href="https://docs.google.com/forms/d/e/1FAIpQLSf02NjqVkMxdUiuUlOTFCDo1-0LM7j2ou3GNIFDS-EUfxXBzw/viewform">Register</a>
            </div>
            
        </div>
    );

}




export  default Fsrules ;