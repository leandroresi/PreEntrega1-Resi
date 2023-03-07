import CartWidget from "./CartWidget";




const NavBar = () => {
    return (
    
      <div className="div-navbar">
      
         <h1 className="title-h1"> W A L D E N</h1>
          <div>
            <ul className="ul-navbar">
                <li className="li-navbar" > <a className="link-navbar" href="#">Nosotros</a> </li>

                <li className="li-navbar" > <a className="link-navbar"  href="#">Productos</a> </li>

                <li className="li-navbar" > <a  className="link-navbar" href="#">Clientes</a> </li>

                <li className="li-navbar" > <a  className="link-navbar" href="#">Mas Informacion</a> </li>
            </ul>

            
          </div>

         

          <CartWidget/>

        </div>   
       
    
    );
}


export default NavBar;