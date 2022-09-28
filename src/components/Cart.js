import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import ItemCart from "./ItemCart";


const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    if (cart.length === 0) {
        return (
            <div>
                <p> No hay elementos en el Carrito </p>
                <Link to="/"> Hacer Compras </Link>
            </div>
        );
    }

    return (
        <div> {cart.map(product => <ItemCart key={product.id} product ={product} />)}
            <p> Total: {totalPrice()} </p>
        </div>      
        )
}

export default Cart;