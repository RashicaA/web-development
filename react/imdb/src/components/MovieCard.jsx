import React from 'react'

const MovieCard = (props) => {
    // const { movieObj } = props;
    return (
        <div
            style={{ backgroundImage: `url(${props.movieObj.url})` }}
            className='h-[40vh] w-[200px] bg-cover bg-center flex items-end rounded-xl hover:scale-110 duration-200 hover:cursor-pointer'
        >
            <div className='text-white text-center w-full p-2 bg-gray-900/50 rounded-xl'>{props.movieObj.title}</div>
        </div>
    )
}

export default MovieCard
