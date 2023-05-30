const ItemListContainer = () => {

  const greeting = () => {
    return 'Bienvenidx a La tiendita!'
  }

  return (<section className="item-list-container">
    
    <div>
      <h1 className="greeting">{greeting()}</h1>
    </div>
  </section>

  )
}

export default ItemListContainer;