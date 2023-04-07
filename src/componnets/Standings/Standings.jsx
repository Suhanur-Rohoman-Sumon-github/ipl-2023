import { key } from 'localforage';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/solid'

const Standings = () => {
    const poients = useLoaderData();

    return (
        <div >
            <table className='w-6/12 mx-auto mt-10'>
                <thead>
                    <tr className='border border-spacing-2 border-gray-200 '>
                        <th className='pr-96 py-4'>Team</th>
                        <th className='pr-4' >M</th>
                        <th className='pr-4'>W</th>
                        <th className='pr-4'>L</th>
                        <th className='pr-4'>Pts</th>
                        <th className='pr-4'>last 5</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        poients.map(poient => (

                            <tr className='border border-spacing-2 border-gray-200'>
                                <td className='py-2 px-4'>{`${poient.id}  ${poient.team}`} </td>
                                <td className='py-2 px-4'>{poient.played}</td>
                                <td className='py-2 px-4'>{poient.won}</td>
                                <td className='py-2 px-4'>{poient.won}</td>
                                <td className='py-2 px-4'>{poient.points}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Standings;