//Librerias
import React from "react"
//Componentes
import { CartContext } from "../../context/CartContext"
//Css
import "../CartWidgetComponent/CartWidgetComponent.css"
//Imagenes
import LogoCarrito from "./assets/logo-carrito.png"

export const CartWidgetComponent = () => {

    const { itemCount } = React.useContext(CartContext)
    
    return (

        <div className="cart">
            <button><img src={LogoCarrito} alt="carrito-de-compras" /></button>
            <span>{itemCount}</span>
        </div>

    )
}