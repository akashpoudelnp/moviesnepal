import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard(props) {
    return (
        <div className="flex flex-col gap-3  p-2">
            <Link to={'/movie/view/' + props.id}>
                <img src={"https://image.tmdb.org/t/p/original" + props.image} className='rounded-xl ' alt="" />
            </Link>
            <div className='flex items-center justify-between '>
                <span className='text-white font-semibold text-md'>{props.title ? props.title : 'MOVIE'}</span>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <span className='flex-1' >{props.year ? props.year : '20XX'}</span>
                    <span className='flex-1 flex'><span>⭐</span> <span>{props.ratings ? props.ratings : 'X.X'}</span></span>
                </div>
            </div>
        </div>
    )
}
