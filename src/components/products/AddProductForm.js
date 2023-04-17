import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProductForm = () => {

    const [product, update] = useState({
        productName: "",
        productTypeId: "", // Question for Monday - how to make these a number, not a string in database
        productPricePerUnit: "",
        productQuantity: ""

    })

    const navigate = useNavigate()

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const productToSendToAPI = {
            productName: product.productName,
            productTypeId: product.productTypeId,
            productPricePerUnit: product.productPricePerUnit,
            productQuantity: product.productQuantity,
        }

        return fetch (`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/products")
            })
    }

    return (
        <form className="productForm">
            <h2 className="productForm_title">Add New Product to Inventory</h2>
            <fieldset>
                <div className="form=group">
                    <label htmlFor="productName">Name of Product:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full name of product"
                        value={product.productName}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.productName = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form=group">
                    <label htmlFor="productTypeId">Product Type ID:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Enter a number only"
                        value={product.productTypeId}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.productTypeId = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form=group">
                    <label htmlFor="productPricePerUnit">Product Price Per Unit:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Enter a number only"
                        value={product.productPricePerUnit}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.productPricePerUnit = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form=group">
                    <label htmlFor="productQuantity">Product Quantity:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Enter a number only"
                        value={product.productQuantity}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.productQuantity = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Add Product
            </button>
        </form>
    )
}