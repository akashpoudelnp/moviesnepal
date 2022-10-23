import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import Error from '../components/Error';
import Layout from '../components/Layout'
import Loading from '../components/Loading';
import ParseYear from '../helpers/ParseYear';

export default function ShowMovie(props) {

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    let { id } = useParams();
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=684043bd65db471319f46418bf951a53&language=en-US&query=")
            .then((res) => {
                setMovie(res.data);
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
            {error && <Error />}
            {movie.id &&
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-end items-center justify-center ">
                    <div className='w-1/2 lg:w-[500px] lg:h-[750px] rounded-xl bg-neutral-800 mx-auto'>
                        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" className="rounded-xl" />
                    </div>
                    <div className='flex flex-col items-center justify-center px-2 gap-2 flex-nowrap'>
                        <h1 className='font-semibold text-3xl text-white pt-2 '>
                            <a href={movie.homepage} className='flex' >
                                {movie.title}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                                </svg>
                            </a>
                        </h1>
                        <div className="flex justify-between items-center gap-2">
                            {movie.genres.map((genre) => (
                                <div key={genre.id} className="bg-orange-400/40 rounded-xl text-white p-2">
                                    {genre.name}
                                </div>
                            ))}
                        </div>
                        <p className='text-gray-300 text-justify'>{movie.overview}</p>
                        <div className="flex justify-between items-center text-white gap-2">
                            <span className='flex-1 flex' >
                                <span>📆</span>
                                <span>{ParseYear(movie.release_date)}</span>
                            </span>
                            <span className='flex-1 flex'><span>⭐</span> <span>{movie.vote_average}</span></span>
                            <span className="bg-teal-400 px-2 py-1 text-white rounded-xl">
                                {movie.status}
                            </span>
                        </div>
                    </div>
                </div>
            }
        </Layout>
    )
}
