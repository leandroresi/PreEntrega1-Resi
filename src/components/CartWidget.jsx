import carritoImagen from '../assets/carrito-img/carrito.png'


const CartWidget = () => {
    return (
        <div className='div-carrito'>
            <span> <img className='carrito-imagen' src={carritoImagen} alt="" /></span>
            <span>2</span>

        </div>
    );
}

export default CartWidget;