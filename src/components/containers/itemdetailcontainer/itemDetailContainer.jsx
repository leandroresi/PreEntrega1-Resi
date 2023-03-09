import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import billeteras from '../../billeteras/billeteras';
function ItemDetailContainer () {
  const [billetera,setBilletera] = useState([]);

  const params = useParams();
  const idBilletera = params.idBilletera;



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
              <p className="card-text">{billetera.descripcion} </p>
              <p className="card-text">{billetera.precio} </p>
              <button href="#" classname="btn btn-primary">Agregar Al Carrito</button>
            </div>
          </div>
        ))}
      </div>
    </>
  ); 
}


export default  ItemDetailContainer