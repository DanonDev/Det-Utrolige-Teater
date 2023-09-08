import MainLayout from '../components/mainLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ActorsInfo = () => {
    const { actor_id } = useParams();
    const [actorsInfo, setActorsInfo] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get(
                    `http://localhost:4000/actors/${actor_id}`
                );
                setActorsInfo(result.data);
            } catch (err) {
                console.error(err);
            }
        };
        getData();
    }, [actor_id]);

    return (
        <>
            <MainLayout>
                <div className="flex-col border-2 border-border-gold w-full mt-10">
                    <div>
                        <h1 className="text-5xl font-normal font-playfair text-text-gold px-10 pt-10">
                            Skuespillere
                        </h1>
                    </div>
                    <div className="flex">
                        <img
                            className=" w-96 h-96 m-10 mr-3"
                            src="http://localhost:4000/Assets/Images/actors/anders-hove.jpg"
                        />
                        <div className="flex flex-col p-10">
                            <h2 className="font-titillium pb-2 text-text-gray text-4xl">
                                {actorsInfo.name}
                            </h2>
                            <p className="font-titillium text-text-gold text-2xl">
                                {actorsInfo.description}
                            </p>
                        </div>
                    </div>
                </div>
                <button className="float-right w-60 p-3 mt-7 mb-16 font-titillium text-lg font-bold text-white bg-text-gold hover:bg-border-gold">
                    <Link to={`/actors`}>ALLE SKUESPILLERE</Link>
                </button>
            </MainLayout>
        </>
    );
};

export default ActorsInfo;
