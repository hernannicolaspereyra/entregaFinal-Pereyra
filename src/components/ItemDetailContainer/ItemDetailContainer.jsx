//Componentes
import { ItemCountComponent } from '../ItemCountComponent'
import Card from 'react-bootstrap/Card'
//Css
import "../ItemDetailContainer/ItemDetailContainer.css"

export const ItemDetainConteiner = ({ producto }) => {

    return (

        <div className="item-detail-container">
            <Card key={producto.id} className="tarjeta-detail">
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                    <Card.Title className='titulo'>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Text>{`$ ${producto.precio}`}</Card.Text>
                    <ItemCountComponent />
                </Card.Body>
            </Card>
        </div>

    )
}