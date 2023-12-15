//Librerias
import React from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, getDoc, doc, query, where } from "firebase/firestore"

export const useProductos = () => {

    const [productos, setProductos] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        //inicializar fiorestore
        const db = getFirestore()

        //indicar a que coleccion
        const productosCollection = collection(db, "productos")

        //hacer la consulta
        getDocs(productosCollection)
            .then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false)
            })
            .catch(() => setError(false))
            .finally(() => setLoading(false))

    }, [])

    return { productos, loading, error }

}

export const useProducto = () => {

    const [producto, setProducto] = React.useState({})
    const { id } = useParams()
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {

        const db = getFirestore()

        const productoCollection = doc(db, "productos", id)

        getDoc(productoCollection)
            .then((snapshot) => {
                setProducto({ id: snapshot.id, ...snapshot.data() })
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, [])

    return { producto, loading, error }

}

export const useProductosPorCategoria = (CategoryId) => {

    const [productos, setProductos] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        const db = getFirestore()

        const productosCollection = collection(db, "productos")

        const categoriaQuery = query(productosCollection, where("categoria", "==", CategoryId))

        getDocs(categoriaQuery)
            .then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false)
            })
            .catch(() => setError(false))
            .finally(() => setLoading(false))

    }, [CategoryId])

    return { productos, loading, error }

}
