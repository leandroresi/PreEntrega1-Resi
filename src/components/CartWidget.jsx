import carritoImagen from '../assets/carrito-img/carrito.png'
import { useContext } from 'react';
import CartContext from './CartContext/CartContext';


const CartWidget = () => {
     const {cart} = useContext(CartContext)

     const cartcount= cart.length;

    return (
        <div className='div-carrito'>
            <span> <img className='carrito-imagen' src={carritoImagen} alt="" /></span>
            <span>{cartcount} </span>

        </div>
    );
}

export default CartWidget;