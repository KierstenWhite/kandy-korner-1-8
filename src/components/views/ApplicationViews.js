import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../locations/Locations"
import { ProductsList } from "../products/ProductsList"
import { AddProductForm } from "../products/AddProductForm"

export const ApplicationViews = () => {
	return (
			<Routes>
				<Route path="/" element={
					<>
						<h1>Kandy Korner</h1>
						<h4>Lolly, lolly, lolly, get your kandies here!</h4>

						<Outlet />
					</>
				}>
					<Route path="locations" element={ <LocationsList /> } />
					<Route path="products" element={ <ProductsList /> } />
					<Route path="product/create" element={ <AddProductForm /> } />
				</Route>

			</Routes>
			)
}

