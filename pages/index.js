import { useState, useEffect } from 'react'

export default function fetchData() {
const [products, setProducts] = useState([])

// use fetch api;provide empty dependencies array as the second argument, 
// so that our request is only made once
useEffect(async() => {
  const productsResponse = await fetch('https://fakestoreapi.com/products')
 const products = await productsResponse.json()
 setProducts(products)
}, [])

  return (
    <ul>
      {products.map((product) => 
     <li key={product.id}>
       <h3>{product.title}</h3>
       <img src={product.image} />
     </li> )}
     
    </ul>
  )
}

