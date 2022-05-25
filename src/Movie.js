import React from 'react';

const Movie = ({ movie }) => {
    return (
        <div className="movie-card" id='mov-card' class="card col-md-6 col-lg-3">
            <div className="overlay"></div>

            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="card-img-top" alt='Movie Poster'></img>
            <div class="card-body">
                <h5 class="card-title">{movie.title}</h5>
                <a href='#' class="btn btn-primary">Go to movie</a>
            </div>
        </div>
    )
}

export default Movie;