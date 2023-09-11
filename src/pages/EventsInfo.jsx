import MainLayout from '../components/mainLayout'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormatDate from '../components/FormatDate'
import BugsyMalone from '../assets/events/large/bugsy-malone.jpg'

const EventsInfo = () => {
    const { event_id } = useParams()
    const [eventsInfo, setEventsInfo] = useState({})

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get(
                    `http://localhost:4000/events/${event_id}`
                )
                setEventsInfo(result.data)
            } catch (err) {
                console.error(err)
            }
        }
        getData()
    }, [event_id])

    if (!eventsInfo.title) {
        return <div>Loading...</div>
    }

    return (
        <MainLayout>
            <div className="w-full">
                <img
                    className="h-customHeight object-cover"
                    src={BugsyMalone}
                />
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        {eventsInfo.stage.name}
                        <p>
                            {FormatDate(eventsInfo.startdate, false)} -{' '}
                            {FormatDate(eventsInfo.stopdate)}
                        </p>
                    </div>
                    <p>BILLETPRIS:{eventsInfo.price}</p>
                </div>
            </div>
            <section className="flex justify-between">
                <div>
                    <h1>{eventsInfo.title}</h1>
                    <h2>{eventsInfo.genre.name}</h2>
                </div>
                <button>KØB BILLET</button>
            </section>
            <p>{eventsInfo.description}</p>
        </MainLayout>
    )
}

export default EventsInfo
