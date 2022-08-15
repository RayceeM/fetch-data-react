import { useState, useEffect } from 'react'
import styled from "styled-components"


type Product = {
  id: number
  title: string
  image: string
}

const ProductList = styled.li`
list-style: none;
border-style: solid;
display: inline-block;
width: auto;
margin: 16px;
padding: 16px;`
;

export default function fetchData() {
const [products, setProducts] = useState<Product[]>([])

// use fetch api;provide empty dependencies array as the second argument, 
// so that our request is only made once
useEffect(() => {
  const getProducts = (async () => {
    try {
      const productsResponse = await fetch('https://fakestoreapi.com/products')
     const products = await productsResponse.json()
     setProducts(products)
    } catch (error) {
      // output an error in the web console.
      console.error(error)
    }
  })
  getProducts()
}, [])

  return (
    <ul>
      {products.map((product) => 
     <ProductList key={product.id}>
       <h3>{product.title}</h3>
       <img src={product.image} height={30} width={30} alt={`product is ${product.title}`}/>
     </ProductList> )}
     
    </ul>
  )
}

