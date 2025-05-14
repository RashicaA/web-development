import React, { useState, useEffect, useContext } from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard'
import axios from 'axios'

import { WatchListContext } from '../context/WatchListContext';

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1);
    // const [watchList, setWatchList] = useState([]);
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
            setPageNo(pageNo - 1)
        }
    }

    function handleNext() {
        setPageNo(pageNo + 1)
    }

    // function addToWatchlist(movieObj) {
    //     console.log("addToWatchlist called with ", movieObj)
    //     const updatedWatchlist = [...watchList, movieObj];
    //     setWatchList(updatedWatchlist);

    //     localStorage.setItem('movies', JSON.stringify(updatedWatchlist))
    // }

    // function removeFromWatchlist(movieObj) {
    //     let filteredMovies = watchList.filter((movie) => movie.id !== movieObj.id)
    //     setWatchList(filteredMovies);
    //     localStorage.setItem('movies', JSON.stringify(filteredMovies))

    // }

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
