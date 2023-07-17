import { useEffect, useState } from "react"
import ItemList from '../Components/ItemList'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore"
import { database } from "../firebase/config"


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  const { categoryId } = useParams()
  useEffect(() => {
    setLoading(true)

    const productsRef = collection(database, 'products');
    getDocs(productsRef)
      .then((response) => {
        const productsArray = response.docs.map((doc) => {
          let docData = doc.data()
          docData.id = doc.id
          return docData
        })

        if (!categoryId) {
          setProducts(productsArray)
        } else {
          setProducts(productsArray.filter((item) => item.category === categoryId))
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [categoryId])

  // const listado = search
  //                       ? products.filter(prod => prod.nombre.includes(search))
  //                       : products
  return (
    <div>
      {
        loading
          ? <h1>Cargando productos...</h1>
          : <ItemList products={products} />
      }
    </div>
  )
}

export default ItemListContainer;