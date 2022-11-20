import React, { useState } from "react";
import { useCartContext } from "../CartContext";
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();


    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }
    return (
        <div className="container">
            <div>
            <Card className="cardDetail">
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                <Card.Title>{data.title} </Card.Title>
                </Card.Body>
                </Card>
                {
                    goToCart
                        ? <Link to='/cart'>Terminar Compra</Link>
                        : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }

            </div>
        </div>
    )

}

export default ItemDetail;