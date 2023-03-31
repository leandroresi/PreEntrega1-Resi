import React from 'react'
import { Link } from 'react-router-dom'

export default function itemList({billetera}) {
  return (
     <div>
        {billetera.map((billetera) =>(
          <div key={billetera.id} className="card" style={{width: "18rem"}}>
            <img src={billetera.imagen} classname="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">{billetera.nombre}</h3>
              <p className="card-text">{billetera.precio} </p>
              <p className="card-text">{billetera.descripcion} </p>
              <Link to={'/detalle/${billetera.id}'}> 
              <button>
                Ver Mas
              </button></Link>
            </div>
          </div>
        ))}
      </div>
  )
}

