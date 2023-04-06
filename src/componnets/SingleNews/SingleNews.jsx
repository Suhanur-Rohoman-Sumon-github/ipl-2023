import React from 'react';

const SingleNews = ({news}) => {
    const {id,news_discription,news_header,news_img} = news;
    return (
        <>
            <div className="card card-side bg-base-100  border border-spacing-2 border-gray-600 p-2 my-4">
                <img src={news_img} alt="Movie" className='w-44 h-44' />
                <div className="card-body">
                    <p className="card-title text-blue-600 "><a href="https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/lucknow-super-giants-vs-sunrisers-hyderabad-10th-match-1359484/match-preview">{news_header}</a></p>
                    <p>{news_discription}</p>
                </div>
            </div>
        </>
    );
};

export default SingleNews;