import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard(props) {
    const media_type = props.type ? props.type : 'movie';
    return (
        <Link to={'/' + media_type + '/view/' + props.id}>
            <div className="flex flex-col gap-3  p-2 relative">

                {props.image ?
                    <img src={"https://image.tmdb.org/t/p/w500" + props.image} className='rounded-xl ' alt="" />
                    :
                    <img src="https://via.placeholder.com/1000x1500.png?text=No%20Image" className='rounded-xl ' alt="" />
                }


                <span className="absolute bg-yellow-500 text-white px-2 py-1 rounded-md text-xs capitalize top-4  right-4">{media_type}</span>
                <div className='flex items-center justify-between '>
                    <span className='text-white font-semibold text-md'>{props.title ? props.title : 'MOVIE'}</span>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <span className='flex-1' >{props.year ? props.year : '20XX'}</span>
                        <span className='flex-1 flex'><span>⭐</span> <span>{props.ratings ? props.ratings : 'X.X'}</span></span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
