import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Products.css"


export const ProductsList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [pricedProducts, sortPriced] = useState(false)

    const navigate = useNavigate()
 
    // Fetch Function for Product Data from API
    useEffect(
        () => {
            fetch (`http://localhost:8088/products?_expand=productType`) //Adding?_ lets it know it's a query, and then you're looking for a different object
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
        },
        []
    )

    // Filtered Products that are equal to or more than $2, else shows products in alphabetical order ($2+ products are showing in ABC order instead of numerical order, as well)
    useEffect(() => {
            if (pricedProducts) {
                const productPriceArray = products.filter(product => product.productPricePerUnit >= 2.00)
                    setFiltered(productPriceArray)
                } else {
                    const abcProductsArray = products.sort((a, b) => (a.productName.toLowerCase() < b.productName.toLowerCase()) ? -1 : 1)
                    setFiltered(abcProductsArray)
                }

            },
            [pricedProducts, products]
    )

    // HTML return
    return <>
        
            <button onClick={ () => sortPriced(true) }>Top Priced</button>
            <button onClick={ () => sortPriced(false) }>Show All</button>
            <button onClick={() => navigate("/product/create")}>Add Product</button>
        

        <h2>Kandy Korner Product Inventory</h2>
        <article className="products">
            {
                filteredProducts.map(
                    (product) => { 
                        return <section className="product" key={`product--${product.id}`}>
                            <p>
                                {product.productName}: ${product.productPricePerUnit}, {product.productType.productTypeName}
                            </p>
                        </section>
                    }
                )
            }
        </article>
    </>

}