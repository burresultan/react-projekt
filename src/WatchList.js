import React from 'react'
import Movie from './MovieList'

export default function WatchList({ movies }) {
    return (
        <div>
            <h2>WatchList</h2>
            {movies?.map((movie, index) => (
                <Movie key={index} movie={movie} />
            ))}
        </div>
    )
}
