import React, { useState, useEffect } from 'react';
import key from '../src/key.json';
import MovieList from './MovieList';
import MovieListHeader from './MovieListHeader';
import axios from "axios";


export default function MovieWatch() {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [watchlist, setWatchList] = useState([]);

    useEffect(() => {
        searchMovie(query);
    }, [query]);

    useEffect(() => {
        const movieWatchList = JSON.parse(localStorage.getItem('Watchlist'));
        if (movieWatchList == undefined) {
            setWatchList([]);
        } else {
            setWatchList(movieWatchList);
        }
    }, []);


    var addWatchList = (movie) => {
        var newWatchList = [...watchlist, movie];
        setWatchList(newWatchList);
        localStorage.setItem('Watchlist', JSON.stringify(newWatchList));  
    };

    var deleteWatchList = (movie) => {
        var newWatchList = watchlist.filter((watchedmovie) => watchedmovie.id != movie.id)
        setWatchList(newWatchList)
        localStorage.setItem('Watchlist', JSON.stringify(newWatchList));
    };
    


    const searchMovie = async (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        // Make a request for a user with a given ID

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key.key}&query=${query}`)
            .then(function (response) {
                // handle success
                setMovies(response.data.results)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    };

    return (
        <div>
        <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Homepage</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Watchlist</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Movie History</a>
        </li>
        </ul>
        
    
        <div>
            <div class="row mb-3" id='search-div'>
                <div class="col-sm-12">
                    <label for="search" class="col-sm-6 col-form-label">Search for a movie</label>
                    <input type="text" class="form-control" id="search" placeholder='Search for a title...' onChange={searchMovie} value={query}></input>
                </div>  
                </div>
           

            <MovieListHeader header='Search results'></MovieListHeader>
            <MovieList movies={movies} onWatchListClick={addWatchList} btnText="Add to Watchlist" />
            <br></br>
            <MovieListHeader header='Watchlist'></MovieListHeader>

            <MovieList movies={watchlist} onWatchListClick={deleteWatchList} btnText="Delete from Watchlist"></MovieList>

        </div>
        </div>

    )
}
