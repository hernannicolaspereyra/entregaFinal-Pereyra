//Librerias
import React from 'react'
//Componentes
import { CartContext } from '../../context/CartContext'
//Css
import "../AddItemButtomComponent/AddItemButtomComponent.css"

export const AddItemButtomComponent = ({ contador, reset }) => {

    const { itemCount, setItemCount } = React.useContext(CartContext)

    const agregarAlCarrito = () => {
        setItemCount(itemCount + contador)
        reset()
    }

    return (

        <div className='boton-agregar'>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
        
    )
}
