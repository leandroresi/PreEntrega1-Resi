import React from "react";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";



const NavBar = () => {
    return (
    
      <div className="div-navbar">
      
         <h1 className="title-h1"> W A L D E N</h1>
          <div>
            <ul className="ul-navbar">
                <li className="li-navbar" > <Link to="/billeteras" className="link-navbar">Billeteras</Link> </li>

                <li className="li-navbar" > <Link to="{'/Acerca De Nosotros/${} '}" className="link-navbar" >Acerca De Nosotros</Link> </li>
            </ul>

            
          </div>

         

          <CartWidget/>

        </div>   
       
    
    );
}


export default NavBar;