//Librerias
import { useParams } from 'react-router-dom'
//Componentes
import { ItemListContainer } from '../components/ItemListContainerComponent'
import { LoaderComponent } from '../components/LoaderComponent'
//CustomHooks
import { useProductosPorCategoria } from '../hooks/useProductos'

const Category = () => {

    const { categoryId } = useParams()
    const { productos, loading, error } = useProductosPorCategoria(categoryId)

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

export default Category