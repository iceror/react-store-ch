import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { database } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    const itemRef = doc(database, "products", itemId)
    getDoc(itemRef)
      .then((doc) => {
        setItem({
          ...doc.data(),
          id: doc.id
        })
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [itemId])

  return (
    <div>
      {
        loading
          ? <h1>Cargando productos...</h1>
          : <ItemDetail {...item} />
      }
    </div>
  )
}

export default ItemDetailContainer