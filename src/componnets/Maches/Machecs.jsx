import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleMatche from '../SingleMatch/SingleMatche';

const Machecs = () => {
    const maches = useLoaderData();
    return (
        <div className='grid lg:grid-cols-3 w-9/12  mt-4 mx-auto shadow-2xl p-4'>
            {
                maches.map(match =><SingleMatche
                key={match.id}
                match = {match}
                ></SingleMatche>)
            }
        </div>
    );
};

export default Machecs;