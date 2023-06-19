import { useEffect, useState } from "react"
import { getData } from '../helpers/getData'
import ItemList from '../Components/ItemList'

const ItemListContainer = () => {


  const [products, setProducts] = useState([])

  useEffect(() => {
    getData()
      .then((res) => {
        setProducts(res.products)
        console.log(res.products);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="container my-5">
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;