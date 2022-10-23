import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Layout from '../components/Layout'
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard'
import ParseYear from '../helpers/ParseYear';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=684043bd65db471319f46418bf951a53&language=en-US";
    useEffect(() => {
        axios.get(API_URL).then((res) => {
            setMovies(res.data.results);
            setLoading(false);
        });
    }, []);
    return (
        <Layout page="home">
            <div>
                <h1 className="text-3xl font-semibold text-white mt-2 ">Movies and Shows</h1>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 pt-6 ">
                <button className="rounded-2xl bg-teal-600 px-4 py-3 text-white">🍿 <span className="pr-3">All</span></button>
                <button className="rounded-2xl bg-gray-600 px-4 py-3 text-white">😂 <span className="pr-3">Comedy</span></button>
                <button className="rounded-2xl bg-gray-600 px-4 py-3 text-white">🪄 <span className="pr-3">Fantasy</span></button>
                <button className="rounded-2xl bg-gray-600 px-4 py-3 text-white">🎭<span className="pr-3">Drama</span></button>
                <button className="rounded-2xl bg-gray-600 px-4 py-3 text-white">👻 <span className="pr-3">Horror</span></button>
            </div>
            {loading && <Loading />}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {movies.map((movie) => (
                    <MovieCard id={movie.id} key={movie.id} title={movie.title} image={movie.poster_path} ratings={movie.vote_average} year={ParseYear(movie.release_date)} />
                ))}
            </div>
        </Layout>
    )
}
