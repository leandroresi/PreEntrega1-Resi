import CartWidget from "./CartWidget";



const NavBar = () => {
    return (
     
      <div>
          <div>
            <ul>
                <li> <a href="#">Nosotros</a> </li>

                <li> <a  href="#">Fundas</a> </li>

                <li> <a  href="#">Clientes</a> </li>

                <li> <a  href="#">Mas Info</a> </li>
            </ul>
          </div>

          <h1>Cases</h1>

          <CartWidget/>

        </div>   
       

    );
}


export default NavBar;