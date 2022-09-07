import React from "react";
import { useState, useEffect } from "react";

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
        <div>
            <button disabled={count <= 1} onClick={decreciente}> - </button>
            <span> {count} </span>
            <button disabled={count >= stock} onClick={creciente}> + </button>
            <div>
                <button disabled={stock<=0} onClick={()=> onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;