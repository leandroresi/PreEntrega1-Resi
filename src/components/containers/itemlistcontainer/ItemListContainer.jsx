import { useEffect, useState } from "react";
import billeteras from '../../billeteras/billeteras';
function ItemListContainer () {
  const [billetera,setBilletera] = useState([]);

  useEffect(() => {
    fetch({billeteras}).then ((res) => {
      return res.json();
    })
    .then((json) => {
      setBilletera(json.data);
    })
  }, []);

  return (
    <>
      <div>
        {billetera.map((billetera) =>(
          <div key={billetera.id} className="card" style={{width: "18rem"}}>
            <img src={billetera.imagen} classname="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">{billetera.nombre}</h3>
              <p className="card-text">{billetera.precio} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  ); 
}


export default  ItemListContainer