import React, { useState, useEffect } from 'react';
import key from '../src/key.json';
import Movie from '../src/Movie';
import axios from "axios";

export default function MovieWatch() {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [watchlist, setWatchList] = useState([])


    useEffect(() => {
        const movieWatchList = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );

        if (movieWatchList) {
            setWatchList(movieWatchList);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    const addWatchList = (movie) => {
        const newWatchList = [...watchlist, movie];
        setWatchList(newWatchList);
        saveToLocalStorage(newWatchList);;
    };

    const searchMovie = (e) => {
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
    }



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
            <div class="row mb-3" id='search-div'>
                <div class="col-sm-12">
                    <label for="search" class="col-sm-2 col-form-label">Search for a movie</label>
                    <input type="text" class="form-control" id="search" placeholder='Search for a title...' onChange={searchMovie} value={query}></input>
                </div>
            </div>


            <div className='movies' id='movie-figures' class="row g-2">
                {movies.map((movie) => (
                    <Movie movie={movie} onWatchListClick={addWatchList} />
                ))
                }
            </div>

        </div>

    )
}
