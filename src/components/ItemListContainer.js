import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const productos = [
{ id:1, image: "https://www.lemodels.com.mx/wp-content/uploads/Cabina-de-Fotos-en-Toluca-Metepec-Lerma-Valle-de-Bravo-5.jpg", title: "Cabina Fotografica"},
{ id:2, image: "https://cdn0.casamiento.com.uy/vendor/1079/3_2/960/jpg/espejo-4_16_1079-164944500718959.jpeg", title: "Espejo Magico"},
];

const ItemListContainer = (props) => {

    const [data, setData] = useState([]);

    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(productos)
            }, 2000);
        });
        getData.then (res => setData(res))
    }, [])

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`)
    }
    return (
        <div>
        <h2> {props.greeting} </h2>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList data={data}/>
        </div>
    )
}


export default ItemListContainer;