import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Error from '../components/Error';
import Layout from '../components/Layout'
import Loading from '../components/Loading';
import ParseYear from '../helpers/ParseYear';

export default function ShowTv(props) {

    const [series, setTv] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    let { id } = useParams();
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/tv/" + id + "?api_key=684043bd65db471319f46418bf951a53&language=en-US&query=")
            .then((res) => {
                setTv(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
            });
    }, [id]);
    return (
        <Layout page="home">
            {loading && <Loading />}
            <div className='flex justify-between items-center'>
                <Link to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </Link>
            </div>
            {error && <Error />}

            {series.id &&
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-end items-center justify-center ">
                        <div className='w-1/2 lg:w-[500px] lg:h-[750px] rounded-xl bg-neutral-800 mx-auto'>
                            <img src={"https://image.tmdb.org/t/p/w500" + series.poster_path} alt="" className="rounded-xl" />
                        </div>
                        <div className='flex flex-col items-center justify-center px-2 gap-2 flex-nowrap'>
                            <h1 className='font-semibold text-3xl text-white pt-2 '>
                                <a href={series.homepage} className='flex' >
                                    {series.title ? series.title : series.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                                    </svg>
                                </a>
                            </h1>
                            <div className="flex justify-between items-center gap-2">
                                {series.genres.map((genre) => (
                                    <div key={genre.id} className="bg-orange-400/40 rounded-xl text-white p-2">
                                        {genre.name}
                                    </div>
                                ))}
                            </div>
                            <p className='text-gray-300 text-justify'>{series.overview}</p>
                            <div className="flex justify-between items-center text-white gap-2">
                                <span className='flex-1 flex' >
                                    <span>📆</span>
                                    <span>{ParseYear(series.first_air_date)} </span>
                                    <span>-</span>
                                    <span>{ParseYear(series.last_air_date)}</span>
                                </span>
                                <span className='flex-1 flex'><span>⭐</span> <span>{series.vote_average}</span></span>
                                <span className="bg-teal-400 px-2 py-1 text-white rounded-xl">
                                    {series.status}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 px-22 ">
                        {series.seasons.map((season) => (
                            <div className='bg-transparent text-white backdrop-blur-lg p-2 rounded grid w-full sm:grid-cols-3 justify-between items-center' key={season.id}>
                                <span>{season.name}</span>
                                <span className='flex gap-1 items-center'>
                                    <span className='text-yellow-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                                        </svg>

                                    </span>
                                    <span>  {season.episode_count}</span>
                                </span>
                                <span className='flex gap-1 text-xs items-center'>
                                    <span className='text-teal-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    <span>{season.air_date ? season.air_date : 'TBA'}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </Layout>
    )
}
