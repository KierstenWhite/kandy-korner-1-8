import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Locations.css"


export const LocationsList = () => {
    const [locations, setLocations] = useState([])

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch (`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        []
    )

    // useEffect(
    //     () => {
    //         console.log(locations)
    //     },
    //     []
    // )

    return <>

        <h2>Kandy Korner Store Locations</h2>
        <article className="locations">
            {
                locations.map(
                    (location) => {
                        return <section className="location" key={`location--${location.id}`}>
                            <h3>{location.name}</h3>
                            <p>
                                <strong>Address:</strong> {location.address}<br></br>
                                <strong>Square Footage:</strong> {location.squareft}
                            </p>
                        </section>
                    }
                )
            }
        </article>
    </>



}