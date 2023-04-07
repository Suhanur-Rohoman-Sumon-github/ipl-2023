import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePlayer from '../singlePlayer/SinglePlayer';

const Player = () => {
    const players = useLoaderData();
    console.log(players)
    return (
        <div className='grid grid-cols-4  mt-4 mx-7 gap-4'>
            {
              players.map(player => <SinglePlayer
              key={player.id}
              player ={player}
              ></SinglePlayer>)  
            }
        </div>
    );
};

export default Player;