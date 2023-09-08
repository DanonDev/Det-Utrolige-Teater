import { useState, useEffect, useMemo } from 'react';
import MainLayout from '../components/mainLayout';

import BatOutOfHell from '../assets/events/large/bat-out-of-hell.jpg';
import BugsyMalone from '../assets/events/large/bugsy-malone.jpg';
import KejserensNye from '../assets/events/large/kejserens-nye-klaeder.jpg';
import MitLivTim from '../assets/events/large/mit-liv-som-tim.jpg';

const Home = () => {
    const [eventData, setEventData] = useState(null);
    const id = 1;

    useEffect(() => {
        fetch(`http://localhost:4000/events/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setEventData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const [eventCards, setEventCards] = useState([]);
    const idCards = useMemo(() => [2, 3, 4], []);

    useEffect(() => {
        Promise.all(
            idCards.map((idCard) =>
                fetch(`http://localhost:4000/events/${idCard}`)
            )
        )
            .then((responses) =>
                Promise.all(responses.map((response) => response.json()))
            )
            .then((data) => {
                setEventCards(data);
            })
            .catch((error) => {
                console.error('Error fetching cards:', error);
            });
    }, [idCards]);

    // Function to format date
    const formatDate = (dateString, includeYear = true) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        if (includeYear) {
            return `${day}. ${month.toUpperCase()} - ${year}`;
        } else {
            return `${day}. ${month.toUpperCase()}`;
        }
    };

    return (
        <MainLayout>
            <>
                {eventData && (
                    <div className="flex mt-10 h-96">
                        <div className="flex flex-col justify-end h-full w-1/3 pr-8 pb-8 text-end border-2 border-r-0 border-border-gold font-titillium text-text-gray">
                            <p className="text-lg">
                                {eventData.stage.name.toUpperCase()}
                            </p>
                            <p className="font-bold text-lg mb-2">
                                {formatDate(eventData.startdate, false)} -{' '}
                                {formatDate(eventData.stopdate)}
                            </p>
                            <div className=" ml-10 mb-7 border-b-2 border-text-gray border-opacity-20" />
                            <h2 className="text-6xl mb-1 font-playfair text-text-gold">
                                {eventData.title}
                            </h2>
                            <p className="text-3xl">
                                {eventData.genre.name.toUpperCase()}
                            </p>
                        </div>
                        <div className="w-2/3">
                            <img
                                className="h-96 w-full object-cover border-12 border-border-gold"
                                src={BatOutOfHell}
                                alt={eventData.title}
                            />
                        </div>
                    </div>
                )}
                <div className="flex justify-between mt-16">
                    {eventCards.map((eventCard) => (
                        <div className="flex flex-col" key={eventCard.id}>
                            <div className="w-96">
                                {eventCard.id === 2 ? (
                                    <img
                                        className="h-96 w-96 object-cover border-12 border-border-gold"
                                        src={BugsyMalone}
                                        alt={eventCard.title}
                                    />
                                ) : eventCard.id === 3 ? (
                                    <img
                                        className="h-96 w-96 object-cover border-12 border-border-gold"
                                        src={KejserensNye}
                                        alt={eventCard.title}
                                    />
                                ) : (
                                    <img
                                        className="h-96 w-96 object-cover border-12 border-border-gold"
                                        src={MitLivTim}
                                        alt={eventCard.title}
                                    />
                                )}
                            </div>
                            <div className="flex flex-col justify-end h-full w-96 pt-8 pr-5 pb-8 text-end border-2 border-t-0 border-border-gold font-titillium text-text-gray">
                                <p className="text-lg">
                                    {eventCard.stage.name.toUpperCase()}
                                </p>
                                <p className="font-bold text-lg mb-2">
                                    {formatDate(eventCard.startdate, false)} -{' '}
                                    {formatDate(eventCard.stopdate)}
                                </p>
                                <div className=" ml-16 mb-4 border-b-2 border-text-gray border-opacity-20" />
                                <h2 className="text-6xl pl-10 mb-1 font-playfair text-text-gold">
                                    {eventCard.title}
                                </h2>
                                <p className="text-3xl">
                                    {eventCard.genre.name.toUpperCase()}
                                </p>
                                <div className="pt-5 flex justify-end gap-5">
                                    <button className="p-3 font-titillium text-lg font-bold text-white bg-btn hover:bg-btn-hover hover:text-text-gold">
                                        LÆS MERE
                                    </button>
                                    <button className="p-3 font-titillium text-lg font-bold text-white bg-text-gold hover:bg-border-gold">
                                        KØB BILLET
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="float-right mt-6 mb-12 p-4 font-titillium text-lg font-bold text-white bg-text-gold hover:bg-border-gold">
                    SE ALLE FORESTILLINGER
                </button>
            </>
        </MainLayout>
    );
};

export default Home;
