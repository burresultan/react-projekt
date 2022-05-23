import React, { useState } from 'react'
//import Movie from './Movie';

export default function MovieWatch() {




    const [movie_search, setMovies] = useState("");
    const [apiResults, setResults] = useState([]);

    const api_key = '5fc7828b8aba06b0be2692e1c7e55ddc';

    //Funktion som säger till input vad vi ska göra när värdet ändras 
    const onChange = (e) => {
        e.preventDefault();
        setMovies(e.target.value);


        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&page=2&include_adult=false&query=${e.target.value}`
        )
            .then(res => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.apiResults);
                    console.log(data)
                } else {
                    setResults([]);
                }
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




            <div class="row mb-3" id='input-div'>
                <div class="col-sm-12">
                    <label for="search" class="col-sm-2 col-form-label">Search for a movie</label>
                    <input type="text" class="form-control" id="search" placeholder='Search for a title...' value={movie_search} onChange={onChange} ></input>
                </div>



            </div>

        </div>

    )
}
