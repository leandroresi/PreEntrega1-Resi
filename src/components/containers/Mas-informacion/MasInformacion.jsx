import React from 'react'

function MasInformacion() {
  return (
    <>
    <div className='mas-info'>
      <h3 className='mas-info-h3'>Mas Informacion</h3>

      <div className='pedidos'> 
        <h3 className='tittles-h3'>Pedidos</h3>

        <p className='texto-tittle'>Hacemos envios todos los lunes y viernes desde las 10hs hasta las 19 hs.Hay dos formas de envios: la normal, que seria por correo argentino o la ultra rapida, la cual enviamos tu producto por una moto y llega el mismo dia. </p>

      </div>

      <div className='cambios'>
        <h3 className='tittles-h3'>Cambios</h3>

        <p className='texto-tittle'>Aceptamos cambios solamente en caso de que el producto venga fallado de fabrica.</p>
      </div>
    </div>
    </>
  )
}

export default MasInformacion