import { useState, useEffect } from 'react';
import MainLayout from '../components/mainLayout';

const Home = () => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const event_id = 1;

        fetch(`http://localhost:4000/events/${event_id}`)
            .then((response) => response.json())
            .then((data) => {
                setEventData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Function to format date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    return (
        <>
            <MainLayout>
                {eventData && (
                    <div>
                        <h2>{eventData.title}</h2>
                        <p>Start Date: {formatDate(eventData.startdate)}</p>
                        <p>Genre: {eventData.genre.name}</p>
                        <p>Stage: {eventData.stage.name}</p>
                        <img src={eventData.image} alt={eventData.title} />
                    </div>
                )}
            </MainLayout>
        </>
    );
};

export default Home;
