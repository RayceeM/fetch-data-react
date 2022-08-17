import { Product } from "../@types/domain"

export async function getProducts() {
    const productsResponse = await fetch('https://fakestoreapi.com/products')
    return await productsResponse.json() as Product[]
}
