import Banner from '../components/Banner';
import MainLayout from '../components/mainLayout';
import { useEffect, useState, useMemo } from 'react';
import BugsyMalone from '../assets/events/large/bugsy-malone.jpg';
import FormatDate from '../components/FormatDate';

const Events = () => {
    const [eventData, setEventData] = useState([]);
    const eventInfo = useMemo(() => [2, 3, 4, 5, 6], []);

    useEffect(() => {
        Promise.all(
            eventInfo.map((eventId) =>
                fetch(`http://localhost:4000/events/${eventId}`)
            )
        )
            .then((responses) =>
                Promise.all(responses.map((response) => response.json()))
            )
            .then((data) => {
                setEventData(data);
            })
            .catch((error) => {
                console.error(`Error fetching event data:`, error);
            });
    }, [eventInfo]);

    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

    const sortedEventData = useMemo(() => {
        const sortedData = [...eventData]; // Create a copy of the array to avoid mutating the original data
        sortedData.sort((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            if (sortOrder === 'asc') {
                return titleA.localeCompare(titleB);
            } else {
                return titleB.localeCompare(titleA);
            }
        });
        return sortedData;
    }, [eventData, sortOrder]);

    return (
        <>
            <MainLayout>
                <Banner />
                <div className="flex justify-between">
                    <div className="flex items-end">
                        <div>
                            <label className="font-titillium text-xl">
                                Filter:
                            </label>
                            <select
                                className="border-2 focus:outline-none rounded-md border-border-gold font-titillium p-4 ml-4"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="asc">
                                    Sorter efter titel(A-Å)
                                </option>
                                <option value="desc">
                                    Sorter efter titel(Å-A)
                                </option>
                            </select>
                        </div>
                    </div>
                    <h1 className="mt-14 text-6xl font-normal font-playfair text-text-gold">
                        Oversigt
                    </h1>
                </div>
                <div className="mt-12">
                    {sortedEventData.map((event) => (
                        <div key={event.id}>
                            <div className="w-full flex justify-between border-2 border-border-gold my-4">
                                <div className="flex ">
                                    <div className="flex h-36 justify-center">
                                        <img
                                            className="w-36 object-cover border-4 border-border-gold"
                                            src={BugsyMalone}
                                        />
                                        <h2 className="w-52 h-full pl-5 text-custom leading-none font-playfair text-text-gold border-l-2 border-border-gold">
                                            {event.title}
                                        </h2>
                                    </div>
                                    <div className="w-0.5 bg-text-gray my-5 ml-10 opacity-30" />
                                    <div className="flex flex-col h-full justify-center pl-10 font-titillium text-text-gray">
                                        <p className="text-xl">
                                            {event.genre.name.toUpperCase()}
                                        </p>
                                        <p className="font-bold text-2xl">
                                            {FormatDate(event.startdate, false)}{' '}
                                            - {FormatDate(event.stopdate)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center pr-7">
                                    <button className="p-4 font-titillium text-xl font-bold text-white bg-btn hover:bg-btn-hover hover:text-text-gold">
                                        LÆS MERE
                                    </button>
                                    <button className="p-4 font-titillium text-xl font-bold text-white bg-text-gold hover:bg-border-gold">
                                        KØB BILLET
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </MainLayout>
        </>
    );
};

export default Events;

// const { event_id } = useParams();
// const [eventInfo, setEventInfo] = useState({});

// useEffect(() => {
//     const getData = async () => {
//         try {
//             const result = await axios.get(
//                 `http://localhost:4000/events/${event_id}`
//             );
//             setEventInfo(result.data);
//         } catch (err) {
//             console.log(err);
//         }
//     };
//     getData();
// }, [event_id]);
