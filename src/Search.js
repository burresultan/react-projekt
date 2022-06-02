import React from 'react'

export default function Search({ searchMovie, query }) {
    return (
        <div class="row mb-3" id='search-div'>
            <div class="col-sm-12">
                <label for="search" class="col-sm-6 col-form-label">Search for a movie</label>
                <input type="text" class="form-control" id="search" placeholder='Search for a title...' onChange={searchMovie} value={query}></input>
            </div>
        </div>
    )
}
