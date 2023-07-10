import { useEffect, useState } from "react"
import { getData } from '../helpers/getData'
import ItemList from '../Components/ItemList'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore"
import { database } from "../firebase/config"


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  //const search = searchParams.get("search")
  const { categoryId } = useParams()
  useEffect(() => {
    setLoading(true)
    // armar ref
    const productsRef = collection(database, 'products');
    getDocs(productsRef)
      .then((response) => {
        const productsArray = response.docs.map((doc) => doc.data())
        console.log(productsArray)
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