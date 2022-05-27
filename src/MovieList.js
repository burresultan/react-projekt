import React from 'react';

const MovieList = ({ movies, onWatchListClick, btnText }) => {
    return (
        <div className='movies' id='movie-figures' class="row g-2">
            {movies?.map((movie, index) => (

                <div className="movie-card" id='mov-card' class="card col-md-6 col-lg-3">
                    <div className="overlay"></div>

                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="card-img-top" alt='Movie Poster'></img>
                    <div class="card-body">
                        <h5 class="card-title">{movie.title}</h5>
                        <p class="card-text">{movie.overview}</p>
                        <button type='button' class="btn btn-primary" key={index} movie={movie} onClick={() => onWatchListClick(movie)}>{btnText}</button>
                    </div>
                </div>))}
        </div>
    )
}

export default MovieList;