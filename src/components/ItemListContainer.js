import React from "react";
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const ItemListContainer = (props) => {

    const [data, setData] = useState([]);
    const {categoriaId} = useParams();
    useEffect (() => {
        
        const querydb = getFirestore();
        const queryCollection = collection (querydb, 'productos');
        if (categoriaId) {
        const queryFilter = query(queryCollection, where('categoria', '==', 'categoria.id'));
        getDocs (queryFilter)
            .then(res => res.docs.map(productos => ({id: res.id, ...res.data()})))
        } else {
            getDocs (queryCollection)
            .then(res => res.docs.map(productos => ({id: res.id, ...res.data()})))
    }
    }, [categoriaId])

    return (
        <div>
        <h2> {props.greeting} </h2>
        <ItemList data={data}/>
        </div>
    )
}


export default ItemListContainer;
