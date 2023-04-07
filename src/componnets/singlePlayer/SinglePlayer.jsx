import React from 'react';

const SinglePlayer = ({ player }) => {
    const { name, image,short_text } = player;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-2xl  image-full ">
                <figure><img src={image} className='w-full h-64' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_text}</p>
                </div>
            </div>
        </>
    );
};

export default SinglePlayer;