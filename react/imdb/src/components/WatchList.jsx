import React, { useEffect, useState } from 'react'
import genreids from '../constants/genre';

const getGenreFromGenreIds = (genreIdsArr) => {
    let res = [];
    for (let i = 0; i < genreIdsArr.length; i++) {
        res.push(genreids[genreIdsArr[i]]);
    }
    return res.join(', ')

}

const WatchList = () => {
    const [watchListMovies, setWatchListMovies] = useState([]);

    useEffect(() => {
        const moviesFromLS = localStorage.getItem('movies');
        if (moviesFromLS) {
            setWatchListMovies(JSON.parse(localStorage.getItem('movies')))
        }
    }, [])

    return (
        <div className='border border-gray-400 rounded-lg m-5 overflow-hidden'>
            <table className='w-full bg-white border-collapse text-left text-sm'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='px-6 py-4 font-medium text-gray-900'>Name</th>
                        <th className='font-medium text-gray-900'>
                            <div className='flex'>
                                <div>
                                    Ratings
                                </div>
                            </div>
                        </th>
                        <th className='font-medium text-gray-900'> <div className='flex'>
                            <div>
                                Popularity
                            </div>
                        </div></th>
                        <th className='font-medium text-gray-900'> <div className='flex'>
                            <div>
                                Genre
                            </div>
                        </div></th>
                    </tr>
                </thead>
                <tbody className='border-t border-gray-600 divide-y divide-gray-200'>
                    {watchListMovies.map((movie) => {
                        return (
                            <tr key={movie.id}>
                                <td className='flex items-center px-6 py-4 font-normal text-gray-900'>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='' className='h-[5rem] w-[8rem] object-fit'></img>
                                    <div className='text-sm font-medium pl-1'>{movie.title}</div>
                                </td>
                                <td className=' py-4' >{movie.vote_average}</td>
                                <td className=' py-4' >{movie.popularity}</td>
                                <td className=' py-4' >{getGenreFromGenreIds(movie.genre_ids)}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>
    )
}

export default WatchList
