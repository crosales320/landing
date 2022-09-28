import React from "react";
import { useCartContext } from "../CartContext";

const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return(
        <div> 
            <img src='https://www.ubolosoft.com/Carrito/images/carrito.png' width={30} height={30}/> 
            <span> {totalProducts() || ""} </span>
        </div>
    )
}

export default CartWidget;