import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../helpers/getData"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()
  //console.log(itemId)

  useEffect(() => {
    setLoading(true)

    getData()
      .then((res) => {
        setItem(res.products.find((prod) => prod.id === Number(itemId)))
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [itemId])

  return (
    <div className="container my-5">
      {
        loading
          ? <h1>Cargando productos...</h1>
          : <ItemDetail {...item} />
      }
    </div>
  )
}

export default ItemDetailContainer