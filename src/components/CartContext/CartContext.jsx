import { createContext, useState } from "react";



const CartContext = createContext({
    cart:[]
} )

function CartContextProvider(props){
   const [cart,setCart] = useState ([])

    return <CartContext.Provider value={{cart: cart }}> {props.children} </CartContext.Provider>
}

export {CartContextProvider}

export default CartContext