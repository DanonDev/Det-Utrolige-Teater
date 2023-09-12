import MainLayout from '../components/mainLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FormatDate from '../components/FormatDate';
import BugsyMalone from '../assets/events/large/bugsy-malone.jpg';
import FormatTime from '../components/FormatTime';

const EventsInfo = () => {
    const { event_id } = useParams();
    const [eventsInfo, setEventsInfo] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get(
                    `http://localhost:4000/events/${event_id}`
                );
                setEventsInfo(result.data);
            } catch (err) {
                console.error(err);
            }
        };
        getData();
    }, [event_id]);

    if (!eventsInfo.title) {
        return <div>Loading...</div>;
    }

    return (
        <MainLayout>
            <div className="w-full mt-10 mb-20 font-titillium">
                <img
                    className="h-customHeight w-full border-16 border-border-gold object-cover"
                    src={BugsyMalone}
                />
                <div className="border-4 border-border-gold border-t-0">
                    <div className="flex justify-between p-5">
                        <div className="flex flex-col text-text-gray">
                            <p className="font-bold text-xl">
                                {eventsInfo.stage.name.toUpperCase()}
                            </p>
                            <p className="text-2xl">
                                {FormatDate(eventsInfo.startdate, false)} -{' '}
                                {FormatDate(eventsInfo.stopdate)}
                            </p>
                        </div>
                        <p className="text-text-gray text-2xl pt-5">
                            BILLETPRIS: {eventsInfo.price},00 DKK
                        </p>
                    </div>
                    <div className="flex mx-5">
                        <div className="w-full border-b-2 opacity-20 border-text-gray" />
                    </div>
                    <section className="flex justify-between items-center font-titillium p-5 mt-3 text-text-gray">
                        <div>
                            <h1 className="font-playfair text-5xl text-text-gold">
                                {eventsInfo.title}
                            </h1>
                            <h2 className="text-2xl pt-3">
                                {eventsInfo.genre.name.toUpperCase()}
                            </h2>
                        </div>

                        <Link className="p-3 w-32 text-center font-titillium text-lg font-bold text-white bg-text-gold hover:bg-border-gold">
                            KØB BILLET
                        </Link>
                    </section>
                    <p className="font-titillium p-5 text-lg text-text-gold">
                        {eventsInfo.description}
                    </p>
                    <p className="font-titillium p-5 pt-0 text-lg text-text-gold">
                        Varighed ca. {FormatTime(eventsInfo.duration_minutes)}{' '}
                        minutter
                    </p>
                    <p>{eventsInfo.actors.name}</p>
                </div>
                <Link
                    to="/events"
                    className="w-36 float-right my-5 p-3 text-center font-titillium text-lg font-bold text-white bg-btn hover:bg-btn-hover hover:text-text-gold"
                >
                    ALLE EVENTS
                </Link>
            </div>
        </MainLayout>
    );
};

export default EventsInfo;
