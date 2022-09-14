import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getItem } from "../api";

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});

    useEffect(()=> {

        getItem().then((producto) =>{
            setProducto(producto)
        });

    }, [])

    return (
        <ItemDetail data={producto} />
    )
}

export default ItemDetailContainer;

