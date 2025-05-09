import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard'
import axios from 'axios'

const Movies = () => {

    const [movies, setMovies] = useState([])

    const [pageNo, setPageNo] = useState(1);

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

    function handlePrevious() {
        if (pageNo > 1) {
            setPageNo(pageNo - 1)
        }
    }

    function handleNext() {
        setPageNo(pageNo + 1)
    }

    return (
        <div>
            <div className='text-2xl font-bold text-center m-4'>
                <h2>Trending Movies</h2>
            </div>
            <div className='flex justify-around gap-8 flex-wrap'>
                {movies.map((movieObj, i) => {
                    return <MovieCard movieObj={movieObj} />
                })}
            </div>
            <Pagination handleNext={handleNext} handlePrevious={handlePrevious} pageNo={pageNo} />
        </div>
    )
}

export default Movies
