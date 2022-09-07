import React from "react";

const CartWidget = ({cart}) => {
    return(
        <div> 
            <img src='https://www.ubolosoft.com/Carrito/images/carrito.png' width={30} height={30}/> 
            <span>{cart}</span>
        </div>
    )
}

export default CartWidget;