import ItemCard from './itemCard'


const ItemList = ({products}) => {
  console.log(products);
    return (
        <div>
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