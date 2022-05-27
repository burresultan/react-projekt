import React from 'react'
import MovieList from './MovieList'

export default function WatchList({ movies }) {
    return (
        <div>
            <h2>WatchList</h2>
            {movies?.map((movie, index) => (
                <MovieList key={index} movie={movie} />
            ))}
        </div>
    )
}
