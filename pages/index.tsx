import { useState, useEffect } from 'react'

type Product = {
  id: number
  title: string
  image: string
}

export default function fetchData() {
const [products, setProducts] = useState<Product>([])

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

