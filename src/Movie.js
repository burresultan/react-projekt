import React from 'react';

const Movie = ({ original_title, poster_path }) => {
    return (
        <div>
            <h2>{original_title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}></img>

        </div>
    )
}

export default Movie;