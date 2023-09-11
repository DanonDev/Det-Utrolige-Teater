import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import MainLayout from '../components/mainLayout'

const Actors = () => {
    const [actorsData, setActorsData] = useState([])

    useEffect(() => {
        // Using a loop to fetch data for actor IDs from 1 to 17
        const fetchDataForActors = async () => {
            const actorsDataArray = []
            for (let actorId = 1; actorId <= 17; actorId++) {
                const url = `http://localhost:4000/actors/${actorId}`
                try {
                    const response = await axios.get(url)
                    actorsDataArray.push(response.data)
                } catch (error) {
                    console.error(
                        `Error fetching actor data for ID ${actorId}:`,
                        error
                    )
                }
            }
            setActorsData(actorsDataArray)
        }

        fetchDataForActors()
    }, [])

    return (
        <>
            <MainLayout>
                <div className="flex flex-col border-2 border-b-0 border-border-gold w-full p-7 mt-10">
                    <h1 className="text-6xl font-normal font-playfair text-text-gold">
                        Skuespillere
                    </h1>
                    <div className="flex flex-col">
                        {actorsData.map((actor) => (
                            <div className="flex flex-col" key={actor.id}>
                                <div className="flex">
                                    <img
                                        className="object-cover p-10 w-64 h-64"
                                        src="http://localhost:4000/Assets/Images/actors/anders-hove.jpg"
                                    />
                                    <div className="flex pt-8">
                                        <div>
                                            <h2 className="font-titillium pb-2 text-text-gray text-4xl">
                                                {actor.name.toUpperCase()}
                                            </h2>
                                            <p className="font-titillium text-text-gold text-xl">
                                                {actor.description.substring(
                                                    0,
                                                    330
                                                )}
                                                ...
                                            </p>
                                        </div>
                                        <div className="flex items-end pb-10">
                                            <Link
                                                className="p-4 font-titillium text-xl font-bold text-white bg-btn hover:bg-btn-hover hover:text-text-gold"
                                                to={`/actors/${actor.id}`}
                                            >
                                                LÆS_MERE
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b-2 pt-2 opacity-20 w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default Actors
