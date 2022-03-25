import React, { useState, useEffect } from 'react'
import "./Shop.css"
import Product from "./../Product/Product";
import Cart from "./../Cart/Cart";
import {addToDb} from '../../utilities/fakedb.js'

const Shop = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect( ()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data => setProducts(data)) 
  } , [])

  const handleAddToCart = (product) => {
    console.log(product)

    const newCart = [...cart, product]
    setCart(newCart)
    addToDb(product.id)

  }
  return (
    <div className="shop-container">
      <div className="products-container">

        {
          products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

export default Shop
