import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Error from '../components/Error'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import MovieCard from '../components/MovieCard'
import ParseYear from '../helpers/ParseYear'

export default function Search() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [results, setResults] = useState([]);
    async function Search(query) {
        setLoading(true);
        if (query.length <= 2 || query === " ") {
            return 0;
        }
        await axios.get("https://api.themoviedb.org/3/search/multi?api_key=684043bd65db471319f46418bf951a53&query=" + query)
            .then((res) => {
                setResults(res.data.results);
                setTimeout(() => {
                    setLoading(false)
                }, 2000);
                setError(false);
                console.log(res.data.results);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
            });
    }
    return (
        <Layout page="home">
            {loading && <Loading />}
            <div className='flex justify-between items-center'>
                <h1 className="text-3xl font-semibold text-white mt-2 ">Search Movies and TV</h1>
                <Link to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                </Link>
            </div>
            <div className='pt-3'>
                <input onInput={(e) => { Search(e.target.value) }} placeholder='Enter movie name, actor, genre' type="search" name="" className='form-input bg-neutral-500/25 outline-none backdrop-blur-lg text-white px-2 py-1 w-96 md:w-full h-14' id="" />
            </div>
            {error && <Error />}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {results.map((result) => (
                    <MovieCard type={result.media_type} id={result.id} key={result.id} title={result.name ? result.name : result.title} image={result.poster_path ? result.poster_path : result.profile_path ? result.profile_path : result.backdrop_path} ratings={result.vote_average} year={ParseYear(result.first_air_date ? result.first_air_date : result.release_date)} />
                ))}
            </div>
        </Layout>
    )
}
