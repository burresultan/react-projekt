import React from 'react'


export default function MovieWatch() {
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
                    <input type="text" class="form-control" id="search" placeholder='Search for a title...' ></input>
                </div>
            </div>



        </div>

    )
}
