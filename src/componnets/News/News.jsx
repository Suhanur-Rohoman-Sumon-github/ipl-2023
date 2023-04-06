import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from '../SingleNews/SingleNews';

const News = () => {
    const newses = useLoaderData()

    return (
        <div className='w-8/12 mx-auto shadow-2xl p-4'>
            {
              newses.map(news=><SingleNews 
                key={news.id}
                news ={news}
              ></SingleNews> )  
            }
        </div>
    );
};

export default News;