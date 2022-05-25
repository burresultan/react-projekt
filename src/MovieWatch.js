import React, { useState, useEffect } from 'react';
import key from '../src/key.json';
import Movie from '../src/Movie';

const api_url = `https://api.themoviedb.org/3/movie/popular?api_key=${key.key}`;
const api_search = `https://api.themoviedb.org/3/search/movie?api_key=${key.key}&query`;
export default function MovieWatch() {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch(api_url)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results);
            })
    }, [])


    const searchMovie = async (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        console.log("Searching");
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${key.key}&query=${query}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);
        }
        catch (e) {
            console.log(e);
        }
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

            <div className='movie'>

            </div>

        </div>

    )
}
