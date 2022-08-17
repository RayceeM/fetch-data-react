import { useState, useEffect } from 'react'
import styled from "styled-components"
import { getProducts } from '../../services/productsService'
import { Product } from '../../@types/domain';


const ProductListItem = styled.li`
list-style: none;
border-style: solid;
display: inline-block;
width: auto;
margin: 16px;
padding: 16px;`
  ;

export function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>([])

  // use fetch api;provide empty dependencies array as the second argument, 
  // so that our request is only made once
  useEffect(() => {
    const run = async () => {
      try {
        const products = await getProducts()
        setProducts(products)
      } catch (error) {
        // output an error in the web console.
        console.error(error)
      }
    }
    run()
  }, [])

  return (
    <ul>
      {products.map((product) =>
        <ProductListItem key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} height={30} width={30} alt={`product is ${product.title}`} />
        </ProductListItem>)}

    </ul>
  )
}
