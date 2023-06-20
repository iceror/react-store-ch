import { useEffect, useState } from "react"
import { getData } from '../helpers/getData'
import ItemList from '../Components/ItemList'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  function showProducts(){
    if(products.length > 0){
      return <ItemList products={products} />
    } else {
      return <h1>Cargando productos</h1>
    }
  }

  //const search = searchParams.get("search")
  const { categoryId } = useParams()
  useEffect(() => {
    setLoading(true)

    getData()
      .then((res) => {
        if (!categoryId) {
          //console.log(res.products);
          setProducts(res.products)
        } else {
          setProducts(res.products.filter((item) => item.category === categoryId))
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [categoryId])

  // const listado = search
  //                       ? products.filter(prod => prod.nombre.includes(search))
  //                       : products
  return (
    <div className="container my-5">
      {

      showProducts()
      }
    </div>
  )
}

export default ItemListContainer;