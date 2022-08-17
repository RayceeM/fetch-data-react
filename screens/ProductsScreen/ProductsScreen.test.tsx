import { getProducts } from "../../services/productsService";
import { render, screen, waitFor, within } from "@testing-library/react"
import { ProductsScreen } from "./ProductsScreen";

const mockProducts = [{
    id: 1,
    title: "myTitle",
    image: "/img/app.jpg"
}]

const the = {
    productItems: ()=> screen.getAllByRole("listitem"),
    productItemAt: (idx: number) => the.productItems()[idx],
    productItemImageAt: (idx: number) => within(the.productItemAt(idx)).getByRole("img")
}

jest.mock("../../services/productsService", () => ({
    getProducts: jest.fn()
}))

describe("get products", () => {
    it("list product items", async () => {
        (getProducts as jest.Mock).mockResolvedValue(mockProducts);
        render(<ProductsScreen />)

   await waitFor(() => expect(the.productItems()).toHaveLength(1)) 
    expect(the.productItemAt(0)).toHaveTextContent("myTitle")
    expect(the.productItemImageAt(0)).toHaveAttribute("src" , "/img/app.jpg")
    })
})


