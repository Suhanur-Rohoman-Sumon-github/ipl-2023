import React from 'react';

const SingleMatche = ({match}) => {
    const {date,first_team_score,header,second_team_score,teams,teams_picture,start_time} = match;
    return (
        <>
            <div className="card w-full bg-base-100 border border-spacing-2 border-gray-700">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <p>{header}</p>
                        <p>{date}</p>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <img src={teams_picture.first_team_picture} className='h-8 w-8 rounded-full' alt="" />
                            <p className='ml-4'>{teams.first_time}</p>
                        </div>
                        <div className='flex items-center mt-4'>
                            <img src={teams_picture.second_team_picture} className='h-8 w-8 rounded-full' alt="" />
                            <p className='ml-4'>{teams.second_time}</p>
                            
                        </div>
                        <p className='mt-2'>{start_time}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleMatche;