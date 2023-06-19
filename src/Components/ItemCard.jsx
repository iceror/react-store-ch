const ItemCard = ({id, product_name, description, price, image}) => {

  return (
      <div>
          <h4>{product_name}</h4>
          <img src={image} alt={product_name}/>
          <p>{description}</p>
          <p>USD ${price}</p>
          <button>Ver más</button>
      </div>
  )
}

export default ItemCard