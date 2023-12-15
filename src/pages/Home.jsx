//Componentes
import { ItemListContainer } from "../components/ItemListContainerComponent"
import { LoaderComponent } from "../components/LoaderComponent"
//CustomHooks
import { useProductos } from "../hooks/useProductos"

const Home = () => {

    const { productos, loading, error } = useProductos()

    return (

        <div>
            {loading ? (
                <LoaderComponent />
            ) : error ? (
                <div>Hubo un error</div>
            ) : (
                <ItemListContainer productos={productos} />
            )}
        </div>

    )
}

export default Home