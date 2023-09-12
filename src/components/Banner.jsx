import { useState, useEffect } from 'react';
import FormatDate from './FormatDate';
import BatOutOfHell from '../assets/events/large/bat-out-of-hell.jpg';

const Banner = () => {
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

    return (
        <>
            {eventData && (
                <div className="flex mt-10 h-96">
                    <div className="flex flex-col justify-end h-full w-1/3 pr-8 pb-8 text-end border-2 border-r-0 border-border-gold font-titillium text-text-gray">
                        <p className="text-lg">
                            {eventData.stage.name.toUpperCase()}
                        </p>
                        <p className="font-bold text-lg mb-2">
                            {FormatDate(eventData.startdate, false)} -{' '}
                            {FormatDate(eventData.stopdate)}
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
        </>
    );
};

export default Banner;
