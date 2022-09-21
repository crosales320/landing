import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const productos = [
{ id:1, image: "https://www.lemodels.com.mx/wp-content/uploads/Cabina-de-Fotos-en-Toluca-Metepec-Lerma-Valle-de-Bravo-5.jpg", categoria: 'servicios', title: "Cabina Fotografica"},
{ id:2, image: "https://cdn0.casamiento.com.uy/vendor/1079/3_2/960/jpg/espejo-4_16_1079-164944500718959.jpeg", categoria: 'servicios', title: "Espejo Magico"},
{ id:3, image: "https://st.depositphotos.com/1002111/2556/i/450/depositphotos_25562709-stock-photo-young-company-on-holiday.jpg", categoria: 'galeria', title: "Brindis"},
{ id:4, image: "https://us.123rf.com/450wm/pressmaster/pressmaster1601/pressmaster160100163/50673277-parte-de-personas-que-se-divierten-en-el-club-nocturno.jpg?ver=6", categoria: 'galeria', title: "Baile"},


];

const ItemListContainer = (props) => {

    const [data, setData] = useState([]);
    const {categoriaId} = useParams();
    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(productos)
            }, 2000);
        });
        if (categoriaId) {
            getData.then (res => setData(res.filter(productos => productos.categoria === categoriaId)));
        } else {
        getData.then (res => setData(res));
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
