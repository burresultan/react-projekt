import React from 'react';

const Movie = ({ movie }) => {
    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>

        </div>
    )
}

export default Movie;