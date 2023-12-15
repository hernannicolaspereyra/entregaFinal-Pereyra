//Librerias
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
//Css
import "./ItemListContainer.css"

export const ItemListContainer = ({ productos }) => {

    return (

        <div className="item-list-container">
            {productos.map((producto) => {
                return (
                    <Card key={producto.id} className="tarjeta">
                        <Card.Img variant="top" src={producto.imagen} />
                        <Card.Body>
                            <Card.Title className="tarjeta-titulo" >{producto.nombre}</Card.Title>
                            <Link to={`/item/${producto.id}`}>Informacion</Link>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>

    )
}