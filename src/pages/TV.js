import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard'
import ParseYear from '../helpers/ParseYear';

export default function TV() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_URL = "https://api.themoviedb.org/3/trending/tv/day?api_key=684043bd65db471319f46418bf951a53&language=en-US";
    useEffect(() => {
        axios.get(API_URL).then((res) => {
            setMovies(res.data.results);
            setLoading(false);
        });
    }, []);
    return (
        <Layout page="home">
            <div className='flex justify-between items-center'>
                <svg className='w-40' viewBox="0 0 643 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_2)">
                        <path d="M10.8985 108.28C9.44783 108.28 8.29583 107.853 7.4425 107C6.58917 106.061 6.1625 104.781 6.1625 103.16V45.304C6.1625 36.2587 8.7225 29.1333 13.8425 23.928C18.9625 18.7227 26.0025 16.12 34.9625 16.12C40.1678 16.12 44.9465 17.4853 49.2985 20.216C53.7358 22.8613 57.0638 26.4027 59.2825 30.84C61.5012 26.3173 64.7438 22.7333 69.0105 20.088C73.3625 17.4427 78.2265 16.12 83.6025 16.12C92.5625 16.12 99.6025 18.7227 104.723 23.928C109.843 29.048 112.403 36.1733 112.403 45.304V103.16C112.403 104.781 111.933 106.061 110.995 107C110.141 107.853 108.989 108.28 107.539 108.28C106.003 108.28 104.808 107.853 103.955 107C103.187 106.061 102.803 104.781 102.803 103.16V45.304C102.803 38.5627 101.267 33.4 98.1945 29.816C95.2078 26.232 90.2585 24.44 83.3465 24.44C77.2878 24.44 72.5518 26.3173 69.1385 30.072C65.7252 33.7413 64.0185 38.8187 64.0185 45.304V103.16C64.0185 104.781 63.5918 106.061 62.7385 107C61.8852 107.853 60.7332 108.28 59.2825 108.28C57.8318 108.28 56.6798 107.853 55.8265 107C55.0585 106.061 54.6745 104.781 54.6745 103.16V45.304C54.6745 38.9893 52.8825 33.9547 49.2985 30.2C45.7145 26.36 41.0212 24.44 35.2185 24.44C28.3065 24.44 23.3145 26.232 20.2425 29.816C17.2558 33.4 15.7625 38.5627 15.7625 45.304V103.16C15.7625 104.781 15.3358 106.061 14.4825 107C13.6292 107.853 12.4345 108.28 10.8985 108.28ZM162.895 108.28C155.471 108.28 149.113 106.787 143.823 103.8C138.532 100.813 134.521 96.8453 131.791 91.896C129.145 86.8613 127.823 81.4427 127.823 75.64C127.823 69.8373 129.145 64.4613 131.791 59.512C134.521 54.4773 138.532 50.4667 143.823 47.48C149.113 44.4933 155.471 43 162.895 43C170.319 43 176.633 44.4933 181.839 47.48C187.129 50.4667 191.097 54.4773 193.743 59.512C196.473 64.4613 197.839 69.8373 197.839 75.64C197.839 81.4427 196.473 86.8613 193.743 91.896C191.097 96.8453 187.129 100.813 181.839 103.8C176.633 106.787 170.319 108.28 162.895 108.28ZM162.895 100.216C170.575 100.216 176.719 98.04 181.327 93.688C186.02 89.336 188.367 83.32 188.367 75.64C188.367 67.96 186.02 61.944 181.327 57.592C176.719 53.24 170.575 51.064 162.895 51.064C155.129 51.064 148.9 53.24 144.207 57.592C139.599 61.944 137.295 67.96 137.295 75.64C137.295 83.32 139.599 89.336 144.207 93.688C148.9 98.04 155.129 100.216 162.895 100.216ZM238.359 108.28C234.263 108.28 230.764 107.043 227.863 104.568C225.047 102.093 222.7 98.2533 220.823 93.048L204.951 49.144C204.78 48.4613 204.695 47.992 204.695 47.736C204.695 46.7973 204.993 45.944 205.591 45.176C206.188 44.3227 206.956 43.7253 207.895 43.384C208.321 43.2133 208.961 43.128 209.815 43.128C210.839 43.128 211.692 43.384 212.375 43.896C213.143 44.408 213.697 45.1333 214.039 46.072L230.167 90.488C231.532 94.1573 232.812 96.7173 234.007 98.168C235.201 99.6187 236.652 100.344 238.359 100.344C240.065 100.344 241.516 99.6613 242.711 98.296C243.991 96.8453 245.271 94.328 246.551 90.744L262.679 46.072C263.447 44.1093 264.855 43.128 266.903 43.128C268.439 43.128 269.676 43.5973 270.615 44.536C271.639 45.3893 272.151 46.456 272.151 47.736C272.151 47.992 272.065 48.4613 271.895 49.144L255.767 93.304C253.889 98.5093 251.543 102.307 248.727 104.696C245.911 107.085 242.455 108.28 238.359 108.28ZM293.56 29.432C291.682 29.432 290.061 28.8347 288.696 27.64C287.416 26.36 286.776 24.824 286.776 23.032C286.776 21.24 287.416 19.704 288.696 18.424C290.061 17.144 291.682 16.504 293.56 16.504C295.437 16.504 297.058 17.1867 298.424 18.552C299.874 19.832 300.6 21.3253 300.6 23.032C300.6 24.7387 299.874 26.232 298.424 27.512C297.058 28.792 295.437 29.432 293.56 29.432ZM293.56 108.28C292.109 108.28 290.957 107.853 290.104 107C289.336 106.061 288.952 104.781 288.952 103.16V48.12C288.952 46.4987 289.336 45.2613 290.104 44.408C290.957 43.4693 292.109 43 293.56 43C295.096 43 296.248 43.4693 297.016 44.408C297.869 45.2613 298.296 46.4987 298.296 48.12V103.16C298.296 104.781 297.869 106.061 297.016 107C296.248 107.853 295.096 108.28 293.56 108.28ZM350.008 108.28C338.914 108.28 330.338 105.421 324.28 99.704C318.221 93.9867 315.192 85.88 315.192 75.384C315.192 65.3147 318.264 57.4213 324.408 51.704C330.552 45.9013 338.957 43 349.624 43C356.194 43 362.04 44.0667 367.16 46.2C372.28 48.248 376.248 51.192 379.064 55.032C381.965 58.7867 383.416 63.096 383.416 67.96C383.416 71.544 382.392 74.3173 380.344 76.28C378.381 78.2427 375.65 79.224 372.152 79.224H324.792C324.792 85.7947 327.01 90.9573 331.448 94.712C335.885 98.3813 342.072 100.216 350.008 100.216C354.872 100.216 359.053 99.704 362.552 98.68C366.05 97.5707 369.336 95.8213 372.408 93.432C374.029 92.0667 375.352 91.384 376.376 91.384C377.144 91.384 377.869 91.7253 378.552 92.408C379.746 93.432 380.344 94.4987 380.344 95.608C380.344 96.4613 379.832 97.4 378.808 98.424C375.309 101.752 371.213 104.227 366.52 105.848C361.826 107.469 356.322 108.28 350.008 108.28ZM369.336 71.672C370.872 71.672 372.024 71.3733 372.792 70.776C373.56 70.0933 373.944 68.8987 373.944 67.192C373.944 64.12 372.92 61.3467 370.872 58.872C368.824 56.3973 365.922 54.4773 362.168 53.112C358.498 51.7467 354.317 51.064 349.624 51.064C342.029 51.064 336.013 52.9413 331.576 56.696C327.224 60.3653 325.048 65.3573 325.048 71.672H369.336ZM425.162 108.28C419.188 108.28 413.556 107.171 408.266 104.952C402.975 102.648 398.794 99.4907 395.722 95.48C395.124 94.6267 394.826 93.7733 394.826 92.92C394.826 92.0667 395.039 91.3413 395.466 90.744C395.978 90.0613 396.618 89.5493 397.385 89.208C398.068 88.952 398.623 88.824 399.05 88.824C399.818 88.824 400.458 89.0373 400.97 89.464C401.567 89.8053 402.25 90.4027 403.018 91.256C408.564 97.144 415.946 100.088 425.162 100.088C429.599 100.088 433.183 99.32 435.914 97.784C438.644 96.248 440.01 94.1147 440.01 91.384C440.01 89.4213 439.455 87.8427 438.346 86.648C437.322 85.368 435.53 84.216 432.97 83.192C430.495 82.0827 426.399 80.5467 420.682 78.584C415.135 76.7067 410.783 74.9147 407.626 73.208C404.468 71.5013 402.122 69.5813 400.586 67.448C399.05 65.2293 398.282 62.5413 398.282 59.384C398.282 54.4347 400.415 50.4667 404.682 47.48C409.034 44.4933 414.794 43 421.962 43C427.252 43 432.159 43.9387 436.682 45.816C441.204 47.608 444.618 50.04 446.922 53.112C447.604 54.0507 447.946 54.9467 447.946 55.8C447.946 57.08 447.263 58.104 445.898 58.872C445.044 59.384 444.191 59.64 443.338 59.64C441.887 59.64 440.522 59 439.242 57.72C437.023 55.5013 434.591 53.88 431.946 52.856C429.3 51.7467 425.93 51.192 421.833 51.192C417.311 51.192 413.855 51.9173 411.466 53.368C409.076 54.8187 407.882 56.8667 407.882 59.512C407.882 61.4747 408.351 63.0533 409.29 64.248C410.314 65.3573 411.892 66.3813 414.026 67.32C416.244 68.1733 420.084 69.496 425.546 71.288C431.69 73.336 436.426 75.2987 439.754 77.176C443.167 78.968 445.599 80.9733 447.05 83.192C448.586 85.4107 449.354 88.1413 449.354 91.384C449.354 96.504 447.092 100.6 442.57 103.672C438.132 106.744 432.33 108.28 425.162 108.28Z" fill="#598BC6" />
                        <path d="M469.271 108.28C467.82 108.28 466.668 107.853 465.815 107C464.961 106.061 464.535 104.781 464.535 103.16V50.936C464.535 43.8533 466.028 37.7093 469.015 32.504C472.087 27.2133 476.439 23.16 482.071 20.344C487.703 17.528 494.316 16.12 501.911 16.12C509.505 16.12 516.076 17.528 521.623 20.344C527.255 23.16 531.564 27.2133 534.551 32.504C537.623 37.7093 539.159 43.8533 539.159 50.936V103.16C539.159 104.781 538.732 106.061 537.879 107C537.111 107.853 535.959 108.28 534.423 108.28C532.972 108.28 531.777 107.853 530.839 107C529.985 106.061 529.559 104.781 529.559 103.16V50.552C529.559 42.2747 527.127 35.832 522.263 31.224C517.399 26.616 510.615 24.312 501.911 24.312C493.377 24.312 486.593 26.6587 481.559 31.352C476.609 36.0453 474.135 42.4453 474.135 50.552V103.16C474.135 104.781 473.708 106.061 472.855 107C472.001 107.853 470.807 108.28 469.271 108.28ZM563.664 108.28C562.213 108.28 561.061 107.853 560.208 107C559.354 106.061 558.928 104.781 558.928 103.16V32.76C558.928 27.9813 560.336 24.2267 563.152 21.496C566.053 18.7653 570.064 17.4 575.184 17.4H596.944C621.264 17.4 633.424 27.5973 633.424 47.992C633.424 57.3787 630.309 64.632 624.08 69.752C617.936 74.7867 609.061 77.304 597.456 77.304H568.528V103.16C568.528 104.781 568.101 106.061 567.248 107C566.394 107.853 565.2 108.28 563.664 108.28ZM597.456 69.24C605.733 69.24 612.133 67.6187 616.656 64.376C621.264 61.1333 623.568 55.672 623.568 47.992C623.568 39.9707 621.349 34.2107 616.912 30.712C612.474 27.128 606.032 25.336 597.584 25.336H575.312C573.264 25.336 571.6 26.0187 570.32 27.384C569.125 28.7493 568.528 30.5413 568.528 32.76V69.24H597.456Z" fill="#DB1F1F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_2">
                            <rect width="643" height="119" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <Link to={'/search'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </Link>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 pt-6 ">
                <Link to={'/'} className="rounded-2xl bg-gray-600 flex gap-1 items-center justify-center py-2 text-white">🍿 <span className="pr-3">All</span></Link>
                <Link to={'/browse/movies'} className="rounded-2xl bg-gray-600 flex gap-1 items-center justify-center py-2 text-white">🎞️ <span className="pr-3">Movies</span></Link>
                <Link to={'/browse/tv'} className="rounded-2xl bg-teal-600 flex gap-1 items-center justify-center py-2 text-white">📺 <span className="pr-3">TV</span></Link>
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