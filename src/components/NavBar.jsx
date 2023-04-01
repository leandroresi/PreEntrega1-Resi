import React from "react";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";



const NavBar = () => {
    return (
    <>
    
 
      <div className="div-navbar">
      
         <h1 className="title-h1"> <Link to={"/home"}  className="link-navbar" > W A L D E N </Link></h1>
          <div>
            <ul className="ul-navbar">
                <li className="li-navbar" > <Link to={"/billetera"}  className="link-navbar"> Billeteras</Link> </li>

                <li className="li-navbar" > <Link to={"/masinformacion"} className="link-navbar" >Mas Informacion</Link> </li>
            </ul>

            
          </div>

         

          <Link to={"/cart"}>  <CartWidget/> </Link>

        </div>   
       
       
       
       </>
    );
}


export default NavBar;