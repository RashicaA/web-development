import React, { useState, useEffect, useContext } from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard'
import axios from 'axios'

import { WatchListContext } from '../context/WatchListContext';
import { useSelector, useDispatch } from "react-redux"
import paginationSlice from '../redux/paginationSlice';

const Movies = () => {
    const [movies, setMovies] = useState([])
    // const pageNo = useSelector((state) => state.PaginationSlice.pageNo)
    // same as above
    const { pageNo } = useSelector((state) => state.PaginationSlice)

    const dispatch = useDispatch()

    const { addToWatchlist, removeFromWatchlist, watchList, setWatchList } = useContext(WatchListContext)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=e278e3c498ab14e0469bf6d86da17045&page=${pageNo}`)
            .then(function (response) {
                // handle success

                setMovies(response.data.results)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [pageNo])

    useEffect(() => {
        const moviesFromLS = localStorage.getItem('movies');
        if (moviesFromLS) {
            setWatchList(JSON.parse(localStorage.getItem('movies')))
        }
    }, [])

    function handlePrevious() {
        if (pageNo > 1) {
            dispatch(paginationSlice.actions.handlePrevious())
        }
    }

    function handleNext() {
        dispatch(paginationSlice.actions.handleNext())
    }

    return (
        <div>
            <div className='text-2xl font-bold text-center m-4'>
                <h2>Trending Movies</h2>
            </div>
            <div className='flex justify-around gap-8 flex-wrap'>
                {movies.map((movieObj, i) => {
                    return <MovieCard movieObj={movieObj} addToWatchlist={addToWatchlist} watchList={watchList} removeFromWatchlist={removeFromWatchlist} />
                })}
            </div>
            <Pagination handleNext={handleNext} handlePrevious={handlePrevious} pageNo={pageNo} />
        </div>
    )
}

export default Movies
