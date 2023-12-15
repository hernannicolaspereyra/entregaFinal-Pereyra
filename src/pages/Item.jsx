//Componentes
import { ItemDetainConteiner } from "../components/ItemDetailContainer"
import { LoaderComponent } from "../components/LoaderComponent"
//CustomHooks
import { useProducto } from "../hooks/useProductos"

const Item = () => {

  const { producto, loading, error } = useProducto()

  return (

    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemDetainConteiner producto={producto} />
      )}
    </div>

  )
}

export default Item