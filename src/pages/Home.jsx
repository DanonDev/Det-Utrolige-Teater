import { useState, useEffect, useMemo } from 'react';
import MainLayout from '../components/mainLayout';
import FormatDate from '../components/FormatDate';
import Banner from '../components/Banner';

import BugsyMalone from '../assets/events/large/bugsy-malone.jpg';
import KejserensNye from '../assets/events/large/kejserens-nye-klaeder.jpg';
import MitLivTim from '../assets/events/large/mit-liv-som-tim.jpg';

const Home = () => {
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

    return (
        <MainLayout>
            <>
                <Banner />
                <div className="flex justify-between mt-16">
                    {eventCards.map((eventCards) => (
                        <div className="flex flex-col" key={eventCards.id}>
                            <div className="w-96">
                                {eventCards.id === 2 ? (
                                    <img
                                        className="h-96 w-96 object-cover border-12 border-border-gold"
                                        src={BugsyMalone}
                                        alt={eventCards.title}
                                    />
                                ) : eventCards.id === 3 ? (
                                    <img
                                        className="h-96 w-96 object-cover border-12 border-border-gold"
                                        src={KejserensNye}
                                        alt={eventCards.title}
                                    />
                                ) : (
                                    <img
                                        className="h-96 w-96 object-cover border-12 border-border-gold"
                                        src={MitLivTim}
                                        alt={eventCards.title}
                                    />
                                )}
                            </div>
                            <div className="flex flex-col justify-end h-full w-96 pt-8 pr-5 pb-8 text-end border-2 border-t-0 border-border-gold font-titillium text-text-gray">
                                <p className="text-lg">
                                    {eventCards.stage.name.toUpperCase()}
                                </p>
                                <p className="font-bold text-lg mb-2">
                                    {FormatDate(eventCards.startdate, false)} -{' '}
                                    {FormatDate(eventCards.stopdate)}
                                </p>
                                <div className=" ml-16 mb-4 border-b-2 border-text-gray border-opacity-20" />
                                <h2 className="text-6xl pl-10 mb-1 font-playfair text-text-gold">
                                    {eventCards.title}
                                </h2>
                                <p className="text-3xl">
                                    {eventCards.genre.name.toUpperCase()}
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
