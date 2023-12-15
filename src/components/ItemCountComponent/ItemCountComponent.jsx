//Librerias
import { useState } from "react"
//Componentes
import { AddItemButtomComponent } from "../AddItemButtomComponent"
//Css
import "../ItemCountComponent/ItemCountComponent.css"

export const ItemCountComponent = () => {

    const [contador, setContador] = useState(1)

    function sumar() {
        setContador(contador + 1)
    }

    function restar() {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    function reset() {
        setContador(1)
    }

    return (

        <div className="item-count">
            <button className="boton-restar" onClick={restar}>-</button>
            <span>{contador}</span>
            <button className="boton-sumar" onClick={sumar}>+</button>
            <AddItemButtomComponent contador={contador} reset={reset} />
        </div>

    )
}