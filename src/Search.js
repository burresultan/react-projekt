import React from 'react'
import MovieListHeader from './MovieListHeader'

export default function Search({ searchMovie, query }) {
    return (
        <div class="row mb-3" id='search-div'>
            <div class="col-sm-12">
                <MovieListHeader header='Search for a Movie'></MovieListHeader>
                <input type="text" class="form-control" id="search" placeholder='Search for a title...' onChange={searchMovie} value={query}></input>
            </div>
        </div>
    )
}
