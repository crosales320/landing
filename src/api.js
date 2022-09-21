import React from "react";
import { useParams } from "react-router-dom";

export const getItem = () => new Promise ((resolve, rejet) =>{
    
    setTimeout (()=> resolve (
        {
        id:1, 
        image: "https://fotomatonbodas.es/wp-content/uploads/2022/01/WhatsApp-Image-2020-02-11-at-18.26.55-1.jpg", 
        title: "Plataforma 360"
        }
    ), 2000)

});