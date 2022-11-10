import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//import { getFirestore, doc, getDoc} from "firebase/firestore";


const productos = [
    { id:1, price: 1700, image: "https://www.lemodels.com.mx/wp-content/uploads/Cabina-de-Fotos-en-Toluca-Metepec-Lerma-Valle-de-Bravo-5.jpg", categoria: 'servicios', title: "Cabina Fotografica"},
    { id:2, price: 1500, image: "https://cdn0.casamiento.com.uy/vendor/1079/3_2/960/jpg/espejo-4_16_1079-164944500718959.jpeg", categoria: 'servicios', title: "Espejo Magico"},
    { id:3, price: 1000, image: "https://st.depositphotos.com/1002111/2556/i/450/depositphotos_25562709-stock-photo-young-company-on-holiday.jpg", categoria: 'galeria', title: "Brindis"},
    { id:4, price: 1300, image: "https://us.123rf.com/450wm/pressmaster/pressmaster1601/pressmaster160100163/50673277-parte-de-personas-que-se-divierten-en-el-club-nocturno.jpg?ver=6", categoria: 'galeria', title: "Baile"},
    ];

    export const ItemDetailContainer = () => {
        /*const [producto, setProducto] = useState({});*/
        const [data, setData] = useState({});
        const {detalleId} = useParams();
        useEffect(()=> {
            /*getItem().then((producto) =>{
                setProducto(producto)
            });*/
            const getData = new Promise(resolve => {
                setTimeout(()=>{
                    resolve (productos);
                }, 2000);
            });
            getData.then (res => setData(res.find(producto => producto.id === parseInt(detalleId))));
        
        }, [detalleId])
        return (
            <ItemDetail data={data} />
        )
    }
    export default ItemDetailContainer;
    

/*export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();
    
    useEffect(()=> {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', detalleId);
        getDoc(queryDoc)
            .then(res => setData({id: res.id, ...res.data()}))
    }, [detalleId])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;*/

