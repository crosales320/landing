import React from "react";
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({data}) => {
    return(
        
        <div className="container">
            <h3> Detalle Servicio</h3>
            <div>
            <Card className="cardDetail">
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
            <Card.Title>{data.title} </Card.Title>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default ItemDetail;