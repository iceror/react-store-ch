import ItemCard from '../Components/itemCard'


const ItemList = ({products}) => {
  console.log(products);
    return (
        <div>
            <h2>Productos</h2>
            <hr/>

            <div className='item-list'>
                {
                    // items.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                  products.map((item) => <ItemCard key={item.id} {...item}/>)
                }
            </div>
        </div>
    )
}

export default ItemList