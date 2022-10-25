import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard'
import ParseYear from '../helpers/ParseYear';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_URL = "https://api.themoviedb.org/3/trending/all/day?api_key=684043bd65db471319f46418bf951a53&language=en-US";
    useEffect(() => {
        axios.get(API_URL).then((res) => {
            setMovies(res.data.results);
            setLoading(false);
        });
    }, []);
    return (
        <Layout page="home">
            <div className='flex justify-between items-center'>
                <h1 className="text-3xl font-semibold text-white mt-2 ">Movies Tracker</h1>
                <Link to={'/search'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </Link>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 pt-6 ">
                <button className="rounded-2xl bg-teal-600 flex gap-1 items-center justify-center py-2 text-white">🍿 <span className="pr-3">All</span></button>
                <button className="rounded-2xl bg-gray-600 flex gap-1 items-center justify-center py-2 text-white">🎞️ <span className="pr-3">Movies</span></button>
                <button className="rounded-2xl bg-gray-600 flex gap-1 items-center justify-center py-2 text-white">📺 <span className="pr-3">TV</span></button>
            </div>
            {loading && <Loading />}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {movies.map((movie) => (
                    <MovieCard type={movie.media_type} id={movie.id} key={movie.id} title={movie.name ? movie.name : movie.title} image={movie.poster_path ? movie.poster_path : movie.profile_path ? movie.profile_path : movie.backdrop_path} ratings={movie.vote_average} year={ParseYear(movie.first_air_date ? movie.first_air_date : movie.release_date)} />
                ))}
            </div>
        </Layout>
    )
}
