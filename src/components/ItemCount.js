import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Style from './Styles.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const decreciente = () => {
        setCount(count - 1)
    }
    const creciente = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount (parseInt(initial));
    }, [initial])

    return (
        <div className="counter">
            <Button variant="outline-secondary" disabled={count <= 1} onClick={decreciente}> - </Button>{' '}
            <span> {count} </span>
            <Button variant="outline-secondary" disabled={count >= stock} onClick={creciente}> + </Button>{' '}
            <div>
                <Button variant="outline-dark" disabled={stock<=0} onClick={()=> onAdd(count)}>Agregar al Carrito</Button>{' '}
            </div>
        </div>
    )
}

export default ItemCount;