import React from 'react'
import { Link } from 'react-router-dom'

export default function itemList({billeteras}) {
  return (
     <div>
        {billeteras.map((billeteras) =>(
          <div key={billeteras.id} className="card" style={{width: "18rem"}}>
            <img src={billeteras.imagen} classname="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">{billeteras.nombre}</h3>
              <p className="card-text">{billeteras.precio} </p>
              <p className="card-text">{billeteras.descripcion} </p>
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

