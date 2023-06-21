import { Link } from "react-router-dom"

const ItemCard = ({ id, product_name, description, price, image, category }) => {

  return (
    <Link to={`/${category}/${id}`}>
      <div className="item-card">
        <h4>{product_name}</h4>
        <img src={image} alt={product_name} />
        <p>{description}</p>
        <p>USD ${price}</p>
        <button className="view-more">Ver más</button>
      </div>
    </Link>
  )
}

export default ItemCard